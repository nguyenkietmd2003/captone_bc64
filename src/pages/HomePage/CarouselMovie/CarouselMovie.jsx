import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { movieSer } from "../../../service/movieService";
import { useDispatch } from 'react-redux';
import {
  turnOffLoading,
  turnOnLoading,
} from '../../../redux/loadingReducer/loadingSlice';

const CarouselMovie = () => {
  const [dataBan, setDataBan] = useState([]);
  const dispatch = useDispatch();
  const carouRef = useRef();
  const fetchBannerMovie = async () => {
    dispatch(turnOnLoading());
    try {
      const dataBanner = await movieSer.getBannerMovie();
      let newDataBanner = dataBanner.data.content;
      console.log("newDataBanner: ", newDataBanner);
      setDataBan(newDataBanner);
      setTimeout(()=>{
        dispatch(turnOffLoading());
      },1500)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //call API
    fetchBannerMovie();
  }, []);

  return (
    <div className="relative">
      <Carousel ref={carouRef}>
        {dataBan.map((banner,i) => {
          return (
            <div key={i} className="w-full">
              <img
                style={{ height: "500px" }}
                className="h-full w-full"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>

      <button
        onClick={() => {
          carouRef.current.next();
        }}
        className="absolute right-10 top-1/3 text-white"
      >
        <i class="fa fa-angle-right"></i>
      </button>
      <button
        onClick={() => {
          carouRef.current.prev();
        }}
        className="absolute left-10 top-1/3 text-white"
      >
        <i class="fa fa-angle-left"></i>
      </button>
    </div>
  );
};

export default CarouselMovie;
