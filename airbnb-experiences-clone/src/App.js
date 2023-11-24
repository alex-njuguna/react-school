// import logo from "./images/Airbnb-mobile.jpg"
import experiences from "./images/experiences.png"
import Kate from "./images/kate_zaferes.jpg"
import star from "./images/star.jpeg"
import './App.css';
import Card from "./Card"
// import Joke from "./Joke"

function App() {

  // const Cards = []

  // for(let i=0; i < 4; i++){
  //     Cards.push(
  //     <div className='col-md-2'>
  //       <Card 
  //         image={experiences}
  //         name="Mr Alex"
  //         phone="0114622333"
  //         email = "alex@xyz.com"
  //       />
  //     </div>)
  // }

   return (
    <div className="container-md m-3">
      <div className="row">
        <Card 
          image={Kate}
          star={star}
          rating = {5.0}
          reviewCount={6}
          country="Kenya"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </div>
   )
}

export default App;
