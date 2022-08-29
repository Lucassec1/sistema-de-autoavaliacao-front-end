import styled from "styled-components";
import { Button } from 'antd';

export const SecondaryButton = styled(Button)`
    display: ${props => props.flex ? "flex" : "inline"};
    align-items: center;
    gap: 5px;
    border-radius: 4px;
    border: 1px solid var(--Primary);
    color: var(--Primary);
    font-weight: 500;

    &:hover {
        background-color: var(--BlueBackground);
        border-color: var(--PrimaryHover);
        color: var(--PrimaryHover);
        box-shadow: 0px 4px 10px 1px rgba(32, 90, 177, 0.25);
    }
`;