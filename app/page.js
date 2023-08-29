'use client'

import { useRef, useState } from "react";
import Movies from './componentes/movies'

export default function Home() {

  //const [titleMovie, setTitleMovie] = useState('');
  const [listaFilmes, setListaFilmes] = useState([]);
  //const [texto, setTexto] = useState('');
  let titleMovie = useRef("");

  function searcheMovie(){
    console.log(titleMovie.current.value);
    fetch(`http://www.omdbapi.com/?apikey=1f46cdad&s=${titleMovie.current.value}`)
    .then(r=>{
        return r.json();
    })
    .then( r=> {
      setListaFilmes(r.Search);
      console.log(r.Search);
    })
  }

  //função exluir
    const removerItem = async (itemRemove) => {
      console.log(itemRemove);
      const upList = listaFilmes.filter(x => x.imdbID != itemRemove);
      setListaFilmes(upList);
    }; 
 

  return (
    <div className="body">
      <div className="inpts-bt">
        <input type='text' ref={titleMovie}/>
        <button onClick={searcheMovie}>Search</button>
      </div>
      <div className="cx-movies">
        {
          listaFilmes.map(function(value,index){
            return <Movies key={value.imdbID} listaFilmes={value} removerItem={removerItem}></Movies>
          })
        }
      </div>
    </div>
  )
}
