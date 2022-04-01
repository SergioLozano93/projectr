import React, {useState} from 'react';
import './App.css';

const arGifs = [
  'https://media0.giphy.com/media/sVo6PMwskjOlUAySa5/giphy.gif',
  'https://media2.giphy.com/media/vEwRtbJDTJob2iXpF7/giphy.gif'
];

const arGift2 = [
  'https://media2.giphy.com/media/b0N6dl04W2CNbN2Vid/giphy.gif?cid=ecf05e474071044dcf537e2669d2ab045d0c044d1a24210c&rid=giphy.gif&ct=g',
];

function App() {
  
  /**
   * * Al cambiar el estado al clicar el boton el componente vuelve a renderizarse
   * ? sdad
   * ! dffsfd
   */
  const [gifs, setGifs] = useState(arGifs)

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        <button  onClick={ () => setGifs(arGift2)}>Cambiar gift</button>
      </section>
    </div>
  );
}

export default App;
