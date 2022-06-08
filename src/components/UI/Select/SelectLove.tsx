import Select, { components } from "react-select";
import "./SelectLove.scss";

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className={`arrowDown`}></div>
    </components.DropdownIndicator>
  );
};
const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <div className="SelectLove-MultiRemove"></div>
    </components.MultiValueRemove>
  );
};
interface ISelectLove {
  options: object[]; // варианты селекта
  placeholder: string;
  isMulti?: boolean; // Использовать множественный выбор
}

const SelectLove = (props: ISelectLove) => {
  return (
    <Select
      options={props.options}
      components={{ DropdownIndicator, MultiValueRemove }}
      placeholder={props.placeholder}
      className="SelectLove"
      classNamePrefix={"SelectLove"}
      isMulti={props.isMulti}
    />
  );
};

export default SelectLove;
