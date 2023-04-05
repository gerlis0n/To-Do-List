import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 860px;
  height: 39px;
  border-radius: 4px;
  flex: none;
  order: 0;
  
  input {
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 747px;
    height: 39px;
    color: #000000;
    background: #F2F2F2;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    &::placeholder {
      color: #838383;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    gap: 10px;
    font-weight: 700;
    width: 109px;
    height: 39px;
    color: #FFFFFF;
    background: #1B1D37;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
  }   
`;