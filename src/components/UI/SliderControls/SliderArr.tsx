import "./SliderArr.scss";

interface ISliderArr {
  direction: "prev" | "next";
  className?: string;
}

const SliderArr = (props: ISliderArr) => {
  return (
    <div className={`SliderArr ${props.className || ""} swiper-button-${props.direction}`}></div>
  );
};

export default SliderArr;
