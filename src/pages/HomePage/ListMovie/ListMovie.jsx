import React, { useEffect, useState } from "react";
import { movieSer } from "../../../service/movieService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  turnOffLoading,
  turnOnLoading,
} from "../../../redux/loadingReducer/loadingSlice";

const ListMovie = () => {
  const [dataMovieList, setDataMovieList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchListMovie();
  }, []);

  const navigatePageDetail = (id) => {
    navigate(`detail-movie/${id}`);
  };

  const fetchListMovie = async () => {
    dispatch(turnOnLoading());
    try {
      const data = await movieSer.getListMovie();
      const movieList = data.data.content;
      setDataMovieList(movieList);
      setTimeout(() => {
        dispatch(turnOffLoading());
      }, 1500);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const renderListMovie = () => {
    return dataMovieList?.map((movie) => {
      return (
        <div
          key={movie.maPhim}
          className="cursor-pointer border rounded-2xl overflow-hidden hover:shadow-lg"
          onClick={() => navigatePageDetail(movie.maPhim)}
        >
          <div className="h-64">
            <img
              src={movie.hinhAnh}
              className="w-full h-full object-cover"
              alt={movie.tenPhim}
            />
          </div>
          <div className="p-4">
            <p className="font-bold text-center text-lg mb-2">{movie.tenPhim}</p>
            <p className="text-sm text-gray-600">{movie.moTa.substring(0, 100)}...</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto py-5 px-4 lg:px-0">
      <div className="text-3xl font-bold text-center mb-10">Danh sách phim</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderListMovie()}
      </div>
    </div>
  );
};

export default ListMovie;
