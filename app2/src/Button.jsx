export default function Button({
  backgroundColor,
  textColor,
  fontSize,
  text,
  handleClick,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: fontSize + "px",
  };
  const url = "https://alex-njuguna.github.io";

  return (
    <button style={buttonStyle} onClick={() => handleClick(url)}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "click me!",
  textColor: "brown",
  backgroundColor: "white",
  fontSize: 14,
};
