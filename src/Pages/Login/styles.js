import styled from 'styled-components';
import Login2 from '../../assets/Login2.png';
import teste from '../../assets/teste.png';

export const Container = styled.div`
    display: flex;
    width: 100vw;  
`;

export const BackgroundForm = styled.div`
    background-image: url(${teste}); 
    display: flex;
    height: 100vh;
    background-repeat: no-repeat; 
    width: 110vh;  
`;


export const IllustrationForm = styled.div`
    background-image: url(${Login2});
    display: flex;
    height: 48vh;
    background-repeat: no-repeat; 
    position: relative;
    width: 35vw;     
    margin-top: 35%; 
    margin-left: 21%;
   
   
`;

export const Title = styled.p`
    display: flex;
    justify-content: center;
    width: 22rem;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 31px;
    text-align: center;
    color: #282825;
    aling-items: center;
`;
export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InputCFP = styled.div`

`;
export const LoginContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

export const Button = styled.div`
    border: 5px solid red;
`;