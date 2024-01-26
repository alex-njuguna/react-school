export default function Button({ backgroundColor, textColor, fontSize, text }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: fontSize + "px",
  };
  return <button style={buttonStyle}>{text}</button>;
}
