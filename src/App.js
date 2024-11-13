import React, { useState } from 'react';
import './App.css'; // Importa el CSS

function App() {
  const [cor, setCor] = useState('cor-inicial');
  const [posicao, setPosicao] = useState(0); // Controla la posición del cuadrado.
  const [visivel, setVisivel] = useState(true);

  // Lista de colores disponibles
  const cores = [
    'cor-inicial', 
    'cor-alternativa', 
    'cor-rojo', 
    'cor-azul', 
    'cor-verde', 
    'cor-amarelo'
  ];

  // Función para cambiar el color cíclicamente
  const mudarCor = () => {
    const indiceAtual = cores.indexOf(cor);
    const novoIndice = (indiceAtual + 1) % cores.length; // Siguiente color en la lista
    setCor(cores[novoIndice]);
  };

  // Función para animar el cuadrado hacia la izquierda y derecha
  const animar = () => {
    // Alterna la posición entre 0px, 100px y -100px
    setPosicao((prevPosicao) => {
      if (prevPosicao === 100) {
        return -100; // Si está en 100px, va a -100px
      } else if (prevPosicao === -100) {
        return 0; // Si está en -100px, vuelve a 0px
      }
      return 100; // Si está en 0px, va a 100px
    });
  };

  // Función para ocultar/mostrar el texto
  const toggleTexto = () => {
    setVisivel(!visivel);
  };

  return (
    <div className="container">
      <h1>Aplicación React: Estilo y Animación</h1>

      {/* Botón que cambia de color */}
      <button onClick={mudarCor}>Cambiar Color</button>
      <div className={`caixa ${cor}`}></div>

      {/* Botón que anima el cuadrado */}
      <button onClick={animar}>Mover Izquierda/Derecha</button>
      <div
        className="quadrado"
        style={{
          transform: `translateX(${posicao}px)`,
          transition: 'transform 1s linear', // Transición suave
        }}
      ></div>

      {/* Botón que oculta/revela el texto */}
      <button onClick={toggleTexto}>Mostrar/ocultar texto</button>
      <p className={`texto ${visivel ? 'visivel' : 'oculto'}`}>
        Este es el texto que se puede ocultar.
      </p>
    </div>
  );
}

export default App;