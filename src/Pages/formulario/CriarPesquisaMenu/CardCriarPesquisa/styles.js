import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 0;
    background-color: transparent;
    
    h2 {
        font-size: 20px;
        margin-left: 3px;
        margin-top: 3px;
        color: #333;
    }
`;

export const Preview = styled.div`
    width: 240px;
    height: 160px;
    border-radius: 10px;

    background-color: white;
    box-shadow: 4px 4px 4px rgba(0,0,0,.02);
`;

