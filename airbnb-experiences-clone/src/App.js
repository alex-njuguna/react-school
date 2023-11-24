// import logo from "./images/Airbnb-mobile.jpg"
import experiences from "./images/experiences.png"
import './App.css';
import Card from "./Card"
import Joke from "./Joke"

function App() {

  const Cards = []

  for(let i=0; i < 4; i++){
      Cards.push(
      <div className='col-md-2'>
        <Card 
          image={experiences}
          name="Mr Alex"
          phone="0114622333"
          email = "alex@xyz.com"
        />
      </div>)
  }

   return (
    <div className="container mt-3">
      <div className='row'>
            <Joke 
              setup="I got my daughter a firidge for her birthday."
              punchline="I can't wait to see her face light up when she opens it"
            />
            <Joke 
              setup="How did the hacker escape the ppolice?"
              punchline="He just ransomware"
            />
            <Joke 
              setup="Why don't pirates travel on mountain roads?"
              punchline="Scurvy"            
            />
            <Joke 
              setup="Why do bees stay in the hive in winter?"
              punchline="Swarm"
            />
            <Joke 
              setup="What's the best thing about switzerland?"
              punchline="I don't know, but the flag is a big plus"
            />
            <Joke
              punchline="It's hard to explain puns to kleptomaniacs,
            they always take things 'LITERALLY'"            
            />

            <Joke
              setup="1 + 1"
              punchline={11}            
            />
            
      </div>
    </div>
  );
}

export default App;
