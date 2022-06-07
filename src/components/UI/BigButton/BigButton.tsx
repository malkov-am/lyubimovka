import "./BigButton.scss";

type arrowDirection =
  | "Dtop"
  | "Dright"
  | "Dbottom"
  | "Dleft"
  | "DtopLeft"
  | "DtopRight"
  | "DbottomLeft"
  | "DbottomRight";

interface IBigButton {
  className?: string;
  children: React.ReactNode;
  // arrPos?: arrowPosition;
  arrDir?: arrowDirection;
  borders?: string;
  color: "whiteBack" | "greenBack";
}

const BigButton = (props: IBigButton) => {
  return (
    <button
      className={`BigButton ${props.className || ""} ${props.borders || ""} ${props.arrDir || ""} ${
        props.color
      }`}
    >
      {props.children}
    </button>
  );
};

export default BigButton;
