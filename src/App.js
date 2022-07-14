import './App.css';

import './Components/Athlete/athlete.css';
import Card from './Components/Athlete/Card';
import Navbar from './Components/Athlete/Navbar';
import Hero from './Components/Athlete/Hero';
import cards from './data';

// import { ContactCard } from './Components/ContactCard';
// import { Joke } from './Components/Joke/Joke';

function App() {

  // const nums = [1, 2, 3, 4, 5];
  // const squares = nums.map(num => num**2);

  // const names = ["alice", "bob", "charlie", "danielle"]
  // const capitalized = names.map((name) => {
  //   return name[0].toUpperCase() + name.slice(1)
  // });
  
  // const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]
  // const pokemonsHTML = pokemons.map(pokemon => `<p>${pokemon}</p>`);

  const plainColors = [
    'red',
    'green',
    'white'
  ];

  const JSXColors = [
    <h4 key="1">red</h4>,
    <h4 key="2">green</h4>,
    <h4 key="3">white</h4>
  ];
  
  return (
    
    // <div className="contacts">
        
    //     <ContactCard
    //     avatar="/images/mr-whiskerson.png"
    //     name="Mr.Whiskerson.png"
    //     email="mr.whiskaz@catnap.meow"
    //     phone="(212) 555-1234"/>

    //     <ContactCard
    //     avatar="/images/fluffykins.png"
    //     name="fluffykins.png"
    //     email="fluff@me.com"
    //     phone="(212) 555-2345"/>
        
    //     <ContactCard
    //     avatar="/images/felix.png"
    //     name="felix.png"
    //     email="thecat@hotmail.com"
    //     phone="(212) 555-4567"/>
        
    //     <ContactCard
    //     avatar="/images/pumpkin.png"
    //     name="pumpkin.png"
    //     email="pumpkin@scrimba.com"
    //     phone="(0800) CAT KING"/>
    // </div>

    // <div>
    //   <Joke
    //     punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
    //     upvotes={10}
    //     downvotes={5}/>

    //     <Joke
    //     setup="I got my daughter a fridge for her birthday."
    //     punchline="I can't wait to see her face light up when she opens it."/>

    //     <Joke
    //     setup="How did the hacker escape the police?"
    //     punchline="He just ransomware!"/>

    //     <Joke
    //     setup="Why don't pirates travel on mountain roads?"
    //     punchline="Scurvy."/>

    //     <Joke
    //     setup="Why do bees stay in the hive in the winter?"
    //     punchline="Swarm."/>
    // </div>

    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {
            cards.map(card => (
              <Card 
                key={card.id}
                {...card}
              />
            ))
          }
        </section>  
    </div>

    
    // <div>
    //   <p>{squares}</p>
    //   <p>{capitalized}</p>
    //   <p>{pokemonsHTML}</p>
    // </div>

    // <div>
    //   {plainColors}
    //   {JSXColors}
    // </div>
  );
}

export default App;
