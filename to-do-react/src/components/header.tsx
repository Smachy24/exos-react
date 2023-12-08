import '../styles/header.css'
import logo from '../assets/github-logo.png'

function Header() {
  return (
    <div className="header">
      <h1 className='header-title'>To-do list</h1>
      <a href='https://github.com/Smachy24' target='_blank' rel="noreferrer">
        <img src={logo} alt='Github logo' className='header-logo'/>
      </a>
    </div>
  );
}

export default Header;