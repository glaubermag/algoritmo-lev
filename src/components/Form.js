import React from "react";
import { useState } from 'react';
import './style.css';
import GitHub from './assets/github.svg'; // Tell webpack this JS file uses this image
import Linked from './assets/linkedin.svg'; // Tell webpack this JS file uses this image


import { useForm } from "react-hook-form";

export default function App() {
  const { handleSubmit, errors } = useForm();
  
  const onSubmit = data => console.log(data);

  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');


  var levenshtein = require('fast-levenshtein');
  var distance = levenshtein.get(string1, string2);   // 2

  return (

    <div >
<nav className="navbar navbar-dark bg-custom ">
<h1> Algoritmo de Levenshtein</h1>

</nav>


<div className="paragrafo">
<p> Em teoria da informação, a distância Levenshtein ou distância de edição entre dois "strings" (duas sequências de caracteres) é dada pelo número mínimo de operações necessárias para transformar um string no outro. Entendemos por "operações" a inserção, deleção ou substituição de um carácter. </p>
<p> O nome advém do cientista russo Vladimir Levenshtein, que considerou esta distância já em 1965. É muito útil para aplicações que precisam determinar quão semelhantes dois strings são, como é por exemplo o caso com os verificadores ortográficos.</p>
<span> Fonte: <a href="https://pt.wikipedia.org/wiki/Dist%C3%A2ncia_Levenshtein" target="blank"> Wikipedia </a></span>
</div>

    <form className="form-custom" onSubmit={handleSubmit(onSubmit)}>
   
    <div className=" ">
    <label  for="string1">Palavra 1:</label>
      <input name="string1" className="form-control " onChange={e => setString1(e.target.value)} />
      </div>

      <div className="">
    <label  for="string2">Palavra 2:</label>
      <input name="string2" className="form-control" onChange={e => setString2(e.target.value)} />
      </div>

      {errors.exampleRequired && <span>This field is required</span>}
      
      <p className="p-result"> O número de operações necessárias será:  { distance } </p>    

    </form>

<footer> <small> Desenvolvido por Glauber Magalhães              
  <a href="https://www.linkedin.com/in/glauberarielmagalhaes/" target="_blank">            <img src={Linked} alt="Linkedin" className="rodape"/> </a>
  <a href="https://github.com/glaubermag/" target="_blank">            <img src={GitHub} alt="GitHub" className="rodape" /> </a>
</small>

</footer>
</div>
  );
}

