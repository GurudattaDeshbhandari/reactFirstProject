import reactLogo from './assets/react.svg';


function Header(){
    return(
      <header className='header'>
   
    <img src={reactLogo} className="logo-react" alt="React logo" />
    <nav>
      <ul className='nav-list'>
        <li className='nav-list-item'>Pricing</li>
        <li className='nav-list-item'>About</li>
        <li className='nav-list-item'>Conatct</li>
      </ul>
    </nav>
  </header>
    )
  }

  export default Header