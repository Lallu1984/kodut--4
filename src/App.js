import { useState } from 'react';
import './App.css';
import Raamatud from './Raamatud';

function App() {

  const [content, setContent] = useState([
    { pealkiri: 'Kevade', 
      autor: 'Oskar Luts',
      listis: false
    },
    { pealkiri: 'Rehepapp', 
      autor: 'Andrus Kivirähk',
      listis: false
    },
    { pealkiri: 'Nullpunkt', 
      autor: 'Margus Karu',
      listis: false 
    },
    { pealkiri: 'Kunksmoor', 
      autor: 'Aino Pervik',
      listis: false
    },
    { pealkiri: 'Hõbevalge', 
      autor: 'Lennart Meri',
      listis: false
    }
  ])

  const [raamat, setRaamat] = useState('')
  const [raamatAutor, setRaamatAutor] = useState('')

  const  lisaListi = (pealkiri, autor) => {
    const uusRaamat = {
      pealkiri: pealkiri,
      autor: autor,
      listis: false
    }
    setContent([...content, uusRaamat])
  }

  

  const lisaKlikk = () => {
    lisaListi(raamat, raamatAutor)
    setRaamat('')
    setRaamatAutor('')
    console.log(raamat)
  }

  const pealkiriMuutus = (event) => {
    setRaamat(event.target.value)
  }

  const autorMuutus = (event) => {
    setRaamatAutor(event.target.value)
  }



  return (
    <div className="kontainer">
      <header className="App-header">
        <h1>RAAMATUD</h1>
      </header>
        <h1 className='pealkiri'>Raamatud</h1>
      <div className='books'>
        <input className='sisestaPealkiri' placeholder='Sisesta pealkiri' value={raamat} onChange={pealkiriMuutus}></input>
        <input className='sisestaAutor' placeholder='Sisesta autor' value={raamatAutor} onChange={autorMuutus}></input>
        <button className='lisaRaamat' onClick={lisaKlikk}>Lisa raamat</button>
        <Raamatud content={content} />
      </div>
    </div>
  );
}

export default App;
