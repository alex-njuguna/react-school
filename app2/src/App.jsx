import Button from "./Button";

export default function App() {
  return (
    <>
      <Button
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
      />
    </>
  );
}
