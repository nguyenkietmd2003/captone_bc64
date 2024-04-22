import { Tabs, Collapse } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { movieSer } from "../../../service/movieService";
const { Panel } = Collapse;

const MovieTabs = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 h-96 overflow-y-scroll">
      {data.map((film,i) => (
        <Collapse
          className="border-b mb-1 border-solid border-neutral-200"
          key={i}
          bordered={false}
          expandIconPosition="end"
          defaultActiveKey={[1]}
        >
          <Panel
            key={1}
            header={
              <div className="flex">
                <img
                  src={film.hinhAnh}
                  className="sm:block w-12 h-14 rounded-b-sm"
                  alt="IMG_cover"
                />
                <div className="ml-2">
                  <h1 className="font-semibold text-sm sm:text-base lg:text-xl text-black">
                    {film.tenPhim} - {film.maPhim}
                  </h1>
                  {film.hot ? (
                    <span className="bg-red-500 px-1 text-xs sm:text-base lg:px-4 text-white rounded-sm w-4">
                      Phim hot
                    </span>
                  ) : (
                    <span className="bg-orange-400 px-1 text-xs sm:text-base lg:px-4 text-white rounded-sm w-4">
                      Xem nhiều
                    </span>
                  )}
                </div>
              </div>
            }
          >
            <div className="lg:ml-3">
              <div className="flex flex-wrap justify-start">
                {film.lstLichChieuTheoPhim.map((time, index) => (
                  <button
                    key={index}
                    className="font-bold text-xs ml-2 px-1 py-1 sm:py-2 sm:px-3 sm:text-sm lg:ml-4 rounded-md mb-3 leading-5 bg-green-100 hover:bg-white text-stone-600 border-solid border border-lime-500 hover:shadow-md hover:border-orange-500 hover:text-orange-500 duration-300"
                    // onClick={() =>
                    //   navigate(`/Booking/TicketRoom/${time.maLichChieu}`)
                    // }
                  >
                    {time.ngayChieuGioChieu}
                  </button>
                ))}
              </div>
            </div>
          </Panel>
        </Collapse>
      ))}
    </div>
  );
};

const MoviesTab = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const navigate = useNavigate();

  const fetchDataCumRap = async () => {
    try {
      let data = await movieSer.layThongTinRapChieuheThong();
      let dataFinal = data.data.content;
      if (dataFinal) {
        setDataMovies(dataFinal);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataCumRap();
  }, []);

  return (
    <>
      <div className="font-bold text-2xl text-center">Danh Sách Cụm Rạp</div>
      <div className="flex justify-center border-2 rounded-sm ">
        <Tabs
          tabPosition="left"
          className="container mx-auto mt-4 hover:shadow-sm"
          items={dataMovies.map((Item,i) => ({
            key: i,
            label: (
              <div>
                <img
                  src={Item.logo}
                  alt="logo"
                  className="h-12 w-12 tabs__logo"
                />
              </div>
            ),
            children: (
              <MovieTabs
                key={Item.maHeThongRap}
                data={Item.lstCumRap.flatMap((theater) => theater.danhSachPhim)}
              />
            ),
          }))}
          id="movieTabs"
        />
      </div>
    </>
  );
};

export default MoviesTab;
