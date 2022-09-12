import styled from "styled-components";

export const HeaderHome = styled.div`
    background: rgba(52, 122, 226, 0.7);
    display: block;
    width: 104rem;
    height: 28vh;
    padding: 1%;
    margin-bottom: 6%;
`;

export const CardHome = styled.div`
    width: 100rem;
    height: 10rem;
    margin-top: 7%;
`;
export const CardPercentual = styled.div`
    background: red;
    border: 1px solid #EBEBEB;
    box-shadow: 0px 1px 5px rgba(32, 90, 177, 0.1);
    border-radius: 4px;
    
`;
export const HeaderCardHome = styled.div`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 15px;
    /* identical to box height */
    /* Secondary Text */
    color: #36383A;
    display:  flex;
    justify-content: space-between;
    align-items: center;
`;
export const NumericEstatistica = styled.div`
    background: ${props => props.color === "growth" ? "#DDFDEF" : "#FDDDE1"};
    border-radius: 4px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${props => props.color === "growth" ? "#00DC7D" : "#FF324B"};
    width: fit-content;
    padding: 1%;
    height: 25px;
`;

export const Contador = styled.div`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.0375em;

    /* Title */

    color: #163A6F;
`;
export const Textp = styled.div`
   
`;