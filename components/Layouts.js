
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styled from "styled-components";

const container = styled.div `

`

const Layout = ({children,pageProps}) => {

  return (
    <>
      <Header pageProps={pageProps}/>
      {children}
      <Footer/>
    </>
    );
}
 
export default Layout;