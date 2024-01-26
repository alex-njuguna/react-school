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
  return (
    <button style={buttonStyle} onClick={handleClick}>
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
