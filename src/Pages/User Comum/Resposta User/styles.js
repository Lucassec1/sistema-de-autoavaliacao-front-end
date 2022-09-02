import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction:  column;

    background-color: white;
    width: 100%;

    align-items: center;
`;

export const AllCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 600px;

    margin-top: 30px;

    overflow-y: scroll;

    ::-webkit-scrollbar-thumb{
    background: #347AE2;
    border-radius: 10px;
    width: 5px;
  }
    
  ::-webkit-scrollbar{
    background-color: #D9D9D9;
    width: 5px;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
    width: 134px;
    height: 51px;
    
    background: #205AB1;
    color: white;
    border-radius: 4px;
    border: none;
    
    :hover{
      background: #163A6F;
    }
`;