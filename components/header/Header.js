import { Content,Enlaces, ListEnlaces, Logo, Navbar } from "./HeaderStyles";
import {useState,useEffect} from 'react'
import { theme } from "../../styles/GlobalStyles";
const Header = () => {
  
  // console.log(theme)
  const [scroll, setscroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });
  const changeBackground = ()=> {
    if(window.scrollY >= 100){
      setscroll(true)
    }
    else {
      setscroll(false)
    }
  }
  // window.addEventListener('scroll', changeBackground)
  return (
    <Content scroll={scroll}>
      <Logo scroll={scroll}>
        <h1>Uro Monster</h1>
      </Logo>
      <Navbar>
        <ListEnlaces scroll={scroll}>
          <li>
            <Enlaces>Inicio </Enlaces>
          </li>
          <li>
            <Enlaces>Galeria </Enlaces>
          </li>
          <li>
            <Enlaces> Tienda </Enlaces>
          </li>
        </ListEnlaces>
      </Navbar>
    </Content>
  );
}
 
export default Header;