import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        width: `${props.width}`,
        height: `${props.height}`,
        marginRight: "30px",
        margin: "auto",
        zIndex: "10000",
        color: "black",
       
      }}
      onClick={onClick}
    />
  );
}
export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        width: "30px",
        margin: "auto",
        height: "30px",
        marginLeft: "20px",
        zIndex: "10000",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}
