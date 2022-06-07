import "./SliderPoint.scss";
interface ISliderPoint {
  className?: string;
}
const SliderPoint = (props: ISliderPoint) => {
  return <div className={`${props.className}`}></div>;
};

export default SliderPoint;
