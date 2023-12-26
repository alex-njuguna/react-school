const User = (props) => {
  return (
    <>
      <img src={props.image}></img>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <h3>Hobbies: </h3>
      {props.hobbies.map((hobby) => (
        <ul key={Math.random() * 10}>
          <li>{hobby}</li>
        </ul>
      ))}
    </>
  )
}

const App = () => {
  return (
  <>
    <User 
      image = "https://avatars.githubusercontent.com/u/123743552?v=4"
      name = 'Alex Njuguna'
      age = {28}
      hobbies = {['coding', 'movies', 'reading', 'music']}
    />
  </>
  )
}

export default App