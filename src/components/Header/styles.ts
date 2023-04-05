import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 34px 40px;
  gap: 10px;
  position: absolute;
  width: 1440px;
  height: 140px;
  left: 0px;
  top: 0px;
  background: #FEFEFE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: none;
  flex-grow: 0;

  .imagemInovax {
    width: 127px;
    height: 55px;
    order: 0;
  }

  .barraVertical {
    width: 2px;
    height: 72px;
    background: #1B1D37;
    order: 1;
  }
`;

export const Title = styled.div`
  width: 218px;
  height: 45px;
  order: 2;

  .toDoList {
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
  }
`;