import styled from 'styled-components';

export const Container = styled.form`
    background-color: #fff;
    margin-top: 70px;
    width: 80%;
    height: 150px;
    padding: 30px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
`;

export const Titulo = styled.input`
    border: 0;
    background-color: transparent;

    font-size: 30px;
    font-weight: 600;
    color: #333;

    margin-bottom: 10px;
`;

export const Descricao = styled.input`
    border: 0;
    background-color: transparent;

    font-size: 18px;
    font-weight: 600;
    color: #555;
`;
