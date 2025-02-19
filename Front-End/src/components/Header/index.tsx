import './index.scss'

export default function Header() {

  return (
    <div className='header'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Animais abandonados</a></li>
        <li><a href="#">Cadastrar animal</a></li>
        <li><a className='btn' href="#">Contato</a></li>
      </ul>
    </div>
  );
}