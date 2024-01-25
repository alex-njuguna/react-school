function ListItem(props) {
  return <li>{props.item.toUpperCase()}</li>;
}

function List(props) {
  if (!props.items) {
    return <div>Loading...</div>;
  }

  if (props.items.length === 0) {
    return <div>No items to display at the moment!</div>;
  }

  return (
    <>
      <ul>
        {props.items.map(
          (item) =>
            // conditional rendering
            item.includes("l") && <ListItem key={item} item={item} />
        )}
      </ul>
    </>
  );
}

function App() {
  const animals = ["lion", "leopard", "rhino", "bufallo", "cheetah"];

  const names = ["Jackline", "Edday", "Michael", "Alfred", "lydia"];

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
