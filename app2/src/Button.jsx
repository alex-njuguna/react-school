export default function Button({ backgroundColor, textColor, fontSize, text }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: fontSize + "px",
  };
  return <button style={buttonStyle}>{text}</button>;
}

Button.defaultProps = {
  text: "click me!",
  textColor: "brown",
  backgroundColor: "white",
  fontSize: 14,
};
