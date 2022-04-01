import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './services/getGifs';

// const arGifs = [
//   'https://media0.giphy.com/media/sVo6PMwskjOlUAySa5/giphy.gif',
//   'https://media2.giphy.com/media/vEwRtbJDTJob2iXpF7/giphy.gif'
// ];

const arGift2 = [
  'https://media2.giphy.com/media/b0N6dl04W2CNbN2Vid/giphy.gif?cid=ecf05e474071044dcf537e2669d2ab045d0c044d1a24210c&rid=giphy.gif&ct=g',
];

function App() {
  
  /**
   * * Al cambiar el estado al clicar el boton el componente vuelve a renderizarse
   * * Si queremos cambiar el estado al ejecutar la pagina tendremos que cambiarlo en un useEffect
   * ? sdad
   * ! El useEffect recibe dos parametros, una funcion y las dependencias que tiene este efecto (que son variables o informacion que si cambia tiene que volver ejecutar el efecto, por lo tanto se le pasa como array)
   * ! Si pasamos un array vacio en las dependencias esto hara que el useEffect solo se ejecute 1 vez 
  */
  const [gifs, setGifs] = useState([])
  
  
  useEffect ( function() {
    console.log('actualizo gif')
    //setGifs(arGift2);
    /**
     * * llamamos al componente getGift al que le pasamos la prop keyword y modificamos el state con lo que nos retorna
     */
    getGifs({keyword: 'rick'}).then(gifs => setGifs(gifs))
    

  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        <button  onClick={ () => setGifs(arGift2)}>Cambiar gift</button>
      </section>
    </div>
    // cambio para guardar en rama
  );
}

export default App;
