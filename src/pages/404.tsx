import React, { useEffect } from "react";
import SmallButton from "../components/UI/SmallButton/SmallButton";
import BigButton from "../components/UI/BigButton/BigButton";
import SliderArr from "../components/UI/SliderControls/SliderArr";
import SliderPoint from "../components/UI/SliderControls/SliderPoint";

const Page404 = () => {
  useEffect(() => {
    document.title = "404 | Любимовка";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "10px",
      }}
    >
      {" "}
      <SmallButton borders="bottom left" arrDirection="Dbottom" arrPos="Pright">
        Показать ещё
      </SmallButton>
      <SmallButton borders="top right" arrDirection="Dleft" arrPos="Pleft">
        Все фестивали
      </SmallButton>
      <BigButton borders="bottom left right" color="greenBack" arrDir="DtopLeft">
        БОЛЬШАЯ КНОПКА такая длинная что больше минимальной ширины
      </BigButton>
      <SliderArr direction="prev" />
      <SliderArr direction="next" />
      <SliderPoint className="SliderPoint swiper-pagination-bullet" />
      <SliderPoint className="SliderPoint swiper-pagination-bullet swiper-pagination-bullet-active" />
    </div>
  );
};

export default Page404;
