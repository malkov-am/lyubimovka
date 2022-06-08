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
  className?: string; // родительские класснейм
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Функция при клике
  type: any; // Тип кнопки
  children: React.ReactNode; // Имя кнопки

  borders?: string; // перечисление бордеров в строке такого типа : "top bottom left right" Каждое вхождение опционально
  fullWidth?: boolean; // Во всю ширину?
  arrPos: arrowPosition; // С какой стороны фон
  arrDirection?: arrowDirection; // Поворот фонового изображения
  backImage?: "backPlus" | "backArrow" | "backPlus"; // Фоновое изображение
}

const SmallButton = (props: ISmallButton) => {
  return (
    <button
      className={`SmallButton ${props.className || ""} ${props.borders || ""} ${
        props.arrDirection || ""
      } ${props.arrPos || ""} ${props.backImage || ""} ${
        props.fullWidth ? "SmallButton__fullWidth" : ""
      }`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default SmallButton;
