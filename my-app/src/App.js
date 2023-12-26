const User = ({image, name, age, hobbies}) => {
  return (
    <>
      <img src={image}/>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <h3>Hobbies: </h3>
      {hobbies.map((hobby) => (
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