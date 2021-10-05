import styled from 'styled-components'

export const Tarjeta = styled.div`
  width: 300px;
  height: 350px;
  border: 2px solid brown;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    &:hover{
      background: red;
      cursor: pointer;
    }
`;