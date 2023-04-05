import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
  `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 860px;
  height: 79px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;

  .checkRectangle {
    position: relative;
    width: 46px;
    height: 79px;
    background: #1B1D37;
    border-radius: 4px 0px 0px 4px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    
    input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2px;
      position: absolute;
      width: 28px;
      height: 28px;
      left: 9px;
      top: 25px;
      border-radius: 4px;
    }
  }
  
  label {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;
    width: 771px;
    min-height: 79px;
    flex-wrap: wrap;
    background: #1B1D37;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    p {
      position: absolute;
      font-weight: 500;
      color: ${done ? '#636AC7;' : '#FFFFFF;'};
      text-decoration-line: ${done ? 'line-through' : 'initial'};
    }
  }
`
));

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 35px;
  height: 79px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  &:hover {
    cursor: pointer;
  }
`;