import Button from "./Button";

export default function App() {
  const handleButtonClick = () => {
    window.open("https://alex-njuguna.github.io", "_blank");
  };
  return (
    <>
      {/* <Button
        text={"Click me!"}
        backgroundColor={"blue"}
        textColor={"white"}
        fontSize={12}
      />
      <Button
        text={"Fuck OFF!"}
        textColor={"white"}
        backgroundColor={"red"}
        fontSize={18}
      />
      <Button
        text={"Wanna dance?"}
        backgroundColor={"yellow"}
        textColor={"white"}
        fontSize={20}
      /> */}

      <Button handleClick={handleButtonClick} />
    </>
  );
}
