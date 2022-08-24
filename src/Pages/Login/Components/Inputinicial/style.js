import styled from 'styled-components';
import { Input, Tooltip, Form, Button } from 'antd';

export const LoginButton = styled(Button)`
    display: flex;
    background-color: var(--Primary);
    border-radius: 4px;
    border: none;
    color: var(--Background);
    font-weight: 500;

    &:hover {
        background-color: var(--PrimaryHover);
        box-shadow: 0px 4px 10px 1px rgba(32, 90, 177, 0.25);
    }
`;

export const ButtonContainer = styled(Form.Item)`
    display: flex;
    justify-content: center;
`;