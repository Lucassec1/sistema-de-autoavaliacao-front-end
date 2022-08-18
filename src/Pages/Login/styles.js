import styled from 'styled-components';
import login1 from '../../assets/login1.png';
import Login2 from '../../assets/Login2.png'

export const Container = styled.div`
    display: flex;
    width: 100vw;  
`;

export const BackgroundForm = styled.div`
    background-image: url(${login1}); 
    display: flex;
    height: 100vh;
    background-repeat: no-repeat; 
    width: 50vw;  
`;

export const IllustrationForm = styled.div`
    background-image: url(${Login2});
    display: flex;
    height: 50vh;
    background-repeat: no-repeat; 
    position: relative;
    width: 50vw;     
    margin-top: 28%; 
    margin-left: 12%;
`;

export const Title = styled.p`
    display: flex;
    justify-content: center;
    width: 20rem;
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

`;
export const InputCFP = styled.div`


`;
export const LoginContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

