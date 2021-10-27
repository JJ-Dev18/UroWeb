import styled from 'styled-components'


export const ContainerShop = styled.div `
margin-top: 60px;
display: flex;
justify-content: center;
flex-direction: column;

`;

export const GridShop = styled.div `
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 margin-top: 20px;

`;

export const Producto = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 1px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
  &:hover {
    border: 3px solid red ;
  }
`;

export const ButtonAdd = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index:2;

  &:hover {
    opacity:.6;
  }
`;