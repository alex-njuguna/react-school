export default function Button(props) {
  const buttonStyle = {
    backgroundColor: props.backgroundColor,
    color: props.textColor,
    fontSize: props.fontSize + "px",
  };
  return <button style={buttonStyle}>{props.text}</button>;
}
