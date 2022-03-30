import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const MainBanner = () => {
  const mainBanner = {
    height: "790px",
    width: "100%",
  };
  const slideItem1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "790px",
    fontSize: "2rem",
    background: "#faf",
  };
  const slideItem2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "790px",
    fontSize: "2rem",
    background: "#faf",
    background: "#f79",
  };
  const slideItem3 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "790px",
    fontSize: "2rem",
    background: "#faf",
    background: "#d45",
  };
  const slideItem4 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "790px",
    fontSize: "2rem",
    background: "#faf",
    background: "#1a1",
  };

  return (
    <Swiper style={mainBanner} slidesPerView={1} autoplay={true} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <div style={slideItem1}>
          <img src="/images/main/mainbanner_1.jpg" alt="메인배너" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={slideItem2}>
          <img src="/images/main/mainbanner_2.jpg" alt="메인배너" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={slideItem3}>
          <img src="/images/main/mainbanner_3.jpg" alt="메인배너" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={slideItem4}>
          <img src="/images/main/mainbanner_4.jpg" alt="메인배너" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainBanner;
