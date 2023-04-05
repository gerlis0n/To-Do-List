import styled, { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    line-height: 19px;
    color: #1B1D37;
    text-decoration: none;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  position: absolute;
  width: 1440px;
  height: 884px;
  left: 0px;
  top: 140px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 20px;
  width: 900px;
  height: 784px;
  border-radius: 20px;
  flex-grow: 1;
  flex: none;
`;