import styled from 'styled-components'

export const Content = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  width: 100vw;
  height: 60px;
  z-index: 9999;
  background: ${(props) => props.scroll ? props.theme.primary : 'transparent'};
  transition : ease 1s background;
`;
export const ContentScrol = styled.header`
 
`;
export const Logo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.scroll ? "white" : 'white'};
  &:hover{
    cursor: pointer;
  }
`;
export const Navbar = styled.nav `
 width:50%;
 
`
export const Enlaces = styled.a`
  font-family: "Uro", sans-serif;
  font-weight: bold;
  line-height: 35px;
  padding: 10px 0;
  color: #fff;
  margin-left: 3rem;
  font-size: 12px;
  transition: border 0.3s ease;

  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1600px) {
    font-size: 20px;
  }
`;
export const ListEnlaces = styled.ul`
  display: flex;
  width: 100%;
  margin-right: auto;
  ${Enlaces}:hover {
    border-top: ${(props) => (props.scroll ? "white" : props.theme.primary)} 3px
      solid;
    border-bottom: ${(props) => (props.scroll ? "white" : props.theme.primary)}
      3px solid;
    cursor: pointer;
  }
`;

