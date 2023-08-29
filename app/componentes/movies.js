
/*
export default function Movies(props,{testeFunc}){
    function Teste(){
        testeFunc('TESTEEEE');
    }
    return(
        <div>
            <h2>{props.listaFilmes.Title}</h2>
            <p>{props.listaFilmes.Year}</p>
            <p>{props.listaFilmes.Type}</p>
            <button onClick={Teste}>Excluir</button>
        </div>
    )
}*/

import React from 'react';

function Movies(props) {
  const handleClick = () => {
    props.removerItem(props.listaFilmes.imdbID);
  };

  return (
    <div className='TESTE'>
        <div className='cx_img'>
          <img src={props.listaFilmes.Poster == "N/A" ? 'image-not-found.png' : props.listaFilmes.Poster}></img>
        </div>
        <div className='cx_Conte'>
          <h2>{props.listaFilmes.Title}</h2>
          <p>Ano: {props.listaFilmes.Year}</p>
          <p>Tipo: {props.listaFilmes.Type}</p>
        </div>
        <div className='cx_DellBt'>
          <button className='btnExcluir' onClick={handleClick}>Excluir</button>
        </div>
    </div>
  );
}

export default Movies;


