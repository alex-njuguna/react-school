function ListItem(props) {
  return <li>{props.item}</li>;
}

function List(props) {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </ul>
    </>
  );
}

function App() {
  const animals = ["lion", "leopard", "rhino", "bufallo", "cheetah"];

  const names = ["Jackline", "Edday", "Michael", "Alfred"];

  return (
    <div>
      <h1>Animals</h1>
      <List items={animals} />
      <h1>People</h1>
      <List items={names} />
    </div>
  );
}

export default App;
