import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  min-height: 100px;
  padding: 15px;
  padding-left: 25px;
  border-radius: 15px;
  background-color: #fafafa;
  border: 1px solid var(--Divider);
  border-left: 4px solid #70a1ea;
  margin: 15px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 1px 5px rgba(32, 90, 177, 0.1);
  transition: 0.3s;

  h3 {
    font-weight: bold;
  }

  p {
    font-weight: 400;
  }

  :hover {
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-left: 4px solid var(--Primary);
  }
`;

export const CardTitle = styled.h4`
  color: var(--Text);
`;

export const CardDescription = styled.p`
  color: var(--SecondaryText);
`;

export const Left = styled.div`
  background-color: #70a1ea;
  width: 5px;
  height: 100%;
  position: absolute;
  border-radius: 15px 0 0 15px;
  top: 0;
  left: 0;
`;

export const Body = styled.div``;
