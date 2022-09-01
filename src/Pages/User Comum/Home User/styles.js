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

export const Card = styled.div`
    height: 40%;
    width: 60%; 

    background: #D9D9D9;
    border-radius: 20px;

    margin-top: 15px;

    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

export const Title = styled.div`
    color: #252628;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
`;

export const Description = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #252628;
`;

export const Button = styled.button`
    width: 134px;
    height: 51px;

    background-color: #2269D3;
    color: white;
    border-radius: 4px;
    border: none;


`;