import React from 'react'
import image from './Img/Persons.svg'
import './App.css';

function App() {
 
  const [comment, setcomment] = React.useState()
  const [Allcomment, setAllcomment] = React.useState([])

  function WhriteTextArea(EventtoTextArea){
    setcomment(EventtoTextArea.target.value)
  }

  function ClickButton(){
    const Lastcomment = [ ... Allcomment,comment]
    setAllcomment(Lastcomment)
  }

  return (
    <div >
     <img src={image} alt='imagem-pessoas' />
     <textarea onChange={WhriteTextArea}></textarea>
     <button onClick={ClickButton}>Comentar</button>


    <ul>
      {Allcomment.map(comments => (
        <li key={comments}>{comments}</li>
      ))}   
    </ul>
    </div>
  );
}

export default App;
