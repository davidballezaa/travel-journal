import "../styles/Navbar.scss"
import logo from "../images/nav-logo.png"

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" className="nav__logo"/>
      <h1 className="nav__title">my travel journal.</h1>
    </nav>
  )
}