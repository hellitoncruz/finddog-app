import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles.scss'

type Animal = {
  _id: string;
  nome: string;
  localizacao: string;
  descricao: string;
  dataRegistro: string;
}

function Abandonados() {
  const [animals, setAnimals] = useState<Animal[]>([])

  useEffect(() => {
    axios.get("http://localhost:5000/animais")
    .then(response => setAnimals(response.data))
    .catch(error => console.error(error))
  },[])

  return (
    <div className='container'>
      {animals?.map((animal: any) => (
        <div key={animal._id}>
          <h1>{animal.nome}</h1>
          <p>{animal.localizacao}</p>
          <p>{animal.descricao}</p>
          <p>{animal.dataRegistro}</p>
        </div>
      ))}
    </div>
  )
}

export default Abandonados
