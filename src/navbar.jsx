import './App.css'
function hamburger(){
  document.body.classList.toggle('hamburger-menu');
}
function Navbar() {
  return(
    <>

      <div className="par">
      <i className="fa-solid fa-bars" id = "bars-hb" onClick={hamburger}></i>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Info</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Help</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar