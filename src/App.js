import { useState } from 'react';
import Banner from './components/Banner/Banner';
import { Form } from './components/Form';
import CharacterClass from './components/CharacterClass';

function App() {

  const charactersList = [
    {
      nome: 'Bárbaro',
      corPrimaria: '#FF5C5C', // Vermelho claro
      corSecundaria: '#FFC6C6' // Tom mais claro de vermelho
    },
    {
      nome: 'Bardo',
      corPrimaria: '#B565B5', // Roxo claro
      corSecundaria: '#DBC0DB' // Tom mais claro de roxo
    },
    {
      nome: 'Bruxo',
      corPrimaria: '#50E250', // Verde claro
      corSecundaria: '#A4FFA4' // Tom mais claro de verde
    },
    {
      nome: 'Clérigo',
      corPrimaria: '#FFFFFF', // Branco
      corSecundaria: '#F4F4F4' // Tom mais claro de branco
    },
    {
      nome: 'Druida',
      corPrimaria: '#58EB58', // Verde claro
      corSecundaria: '#A3FFA3' // Tom mais claro de verde
    },
    {
      nome: 'Feiticeiro',
      corPrimaria: '#689CFF', // Azul claro
      corSecundaria: '#C9DFFF' // Tom mais claro de azul
    },
    {
      nome: 'Guerreiro',
      corPrimaria: '#939393', // Cinza claro
      corSecundaria: '#D6D6D6' // Tom mais claro de cinza
    },
    {
      nome: 'Ladino',
      corPrimaria: '#B4B4B4', // Cinza claro
      corSecundaria: '#E8E8E8' // Tom mais claro de cinza
    },
    {
      nome: 'Mago',
      corPrimaria: '#9CC5FF', // Azul claro
      corSecundaria: '#E2EDFF' // Tom mais claro de azul
    },
    {
      nome: 'Monge',
      corPrimaria: '#FFB875', // Laranja claro
      corSecundaria: '#FFDFAF' // Tom mais claro de laranja
    },
    {
      nome: 'Paladino',
      corPrimaria: '#FFEE70', // Dourado claro
      corSecundaria: '#FFF8C0' // Tom mais claro de dourado
    },
    {
      nome: 'Patrulheiro',
      corPrimaria: '#62E662', // Verde claro
      corSecundaria: '#B5FFB5' // Tom mais claro de verde
    }
  ];

  const [personagems, setPersonagems] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => { //personagem é um objeto javascript
    console.log(personagems) //personagems é o conjunto de objetos
    setPersonagems([...personagems, personagem]) //reescreve os personagems que já estão e adiona o ultimo que foi passado como parametro na função
  }
  
  return (
    <div className="App">
      <Banner/> 
      <Form 
        charactersClass={charactersList.map(dndClass => dndClass.nome)} 
        aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}
      />
      
      {charactersList.map(characterObject => 

      <CharacterClass 
        key={characterObject.nome} 
        nome={characterObject.nome} 
        corPrimaria={characterObject.corPrimaria} 
        corSecundaria={characterObject.corSecundaria} 
        characters={personagems.filter(personagemFiltrado => personagemFiltrado.dndClass === characterObject.nome)}
      />)}

    </div>
  );
}

export default App;
