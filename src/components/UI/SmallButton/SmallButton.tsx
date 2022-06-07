import "./SmallButton.scss";
type arrowDirection =
  | "Dtop"
  | "Dright"
  | "Dbottom"
  | "Dleft"
  | "DtopLeft"
  | "DtopRight"
  | "DbottomLeft"
  | "DbottomRight";
type arrowPosition = "Pleft" | "Pright";

interface ISmallButton {
  className?: string;
  children: React.ReactNode;
  borders?: string;
  arrPos: arrowPosition;
  arrDirection?: arrowDirection;
  backImage?: "backPlus" | "backArrow";
}

const SmallButton = (props: ISmallButton) => {
  return (
    <button
      className={`SmallButton ${props.className || ""} ${props.borders || ""} ${
        props.arrDirection || ""
      } ${props.arrPos || ""} ${props.backImage || ""}`}
    >
      {props.children}
    </button>
  );
};

export default SmallButton;
