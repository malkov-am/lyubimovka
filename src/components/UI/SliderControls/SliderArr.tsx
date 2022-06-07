import "./SliderArr.scss";

interface ISliderArr {
  direction: "prev" | "next";
  className?: string;
}

const SliderArr = (props: ISliderArr) => {
  //swiper-button-prev swiper-button-disabled
  return (
    <div className={`SliderArr ${props.className || ""} swiper-button-${props.direction}`}></div>
  );
};

export default SliderArr;
