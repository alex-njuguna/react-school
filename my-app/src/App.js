const App = () => {
  const peopleInfo = [
    {
      username: 'Alex',
      country: 'Kenya',
      email: 'alex@mail.com'
    },
    {
      username: 'mike',
      country: 'South Africa',
      email: 'mike@mail.com'
    },
    {
      username: 'Edday',
      country: 'Egypt',
      email: 'edday@mail.com'
    }
  ]

  return (
    <>
    {peopleInfo.map((person) => (
      <ul key={Math.random() * 100}>
        <li>{person.username}</li>
        <li>{person.country}</li>
        <li>{person.email}</li>
      </ul>
    ))}
    </>
  )
}

export default App