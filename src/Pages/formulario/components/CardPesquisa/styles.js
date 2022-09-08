import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  min-height: 100px;
  padding: 15px;
  padding-left: 25px;
  border-radius: 15px;
  background-color: #eee9;
  margin: 15px;
  cursor: pointer;
  position: relative;

  h3 {
    font-weight: bold;
  }

  p {
    font-weight: 400;
  }
`;

export const Left = styled.div`
    background-color: #70A1EA;
    width: 5px;
    height: 100%;
    position: absolute;
    border-radius: 15px 0 0 15px;
    top: 0;
    left: 0;
`;

export const Body = styled.div`
    
`;