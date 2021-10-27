import { Content,Enlaces, ListEnlaces, Logo, Navbar } from "./HeaderStyles";
import {useState,useEffect} from 'react'
import { theme } from "../../styles/GlobalStyles";
import ChangeLanguage from "../globalComponents/ChangeLanguage";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faShoppingCart, faUserFriends } from "@fortawesome/free-solid-svg-icons";
const Header = ({pageProps}) => {
  

  const [scroll, setscroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });
  useEffect(() => {
    pageProps.showHeader ? setscroll(true) : setscroll(false); 
  }, [pageProps.showHeader])

  const changeBackground = ()=> {
    if(!pageProps.showHeader){
        if (window.scrollY >= 100) {
          setscroll(true);
        } else {
          setscroll(false);
        }
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
          {pageProps.enlaces && pageProps.enlaces.map((enlace) => {
            return (
              <li key={enlace.nombre}>
                <Link href={`${enlace.link}`}>
                  <Enlaces>{enlace.nombre} </Enlaces>
                </Link>
              </li>
            );
          })}
          {pageProps.showHeader && (
            <>
              <li>
                <Enlaces>
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </Enlaces>
              </li>
              <li>
                <Enlaces>
                  <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                </Enlaces>
              </li>
            </>
          )}
          <li>
            <ChangeLanguage />
          </li>
        </ListEnlaces>
      </Navbar>
    </Content>
  );
}
 
export default Header;

