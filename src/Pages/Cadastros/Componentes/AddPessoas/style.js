import styled from "styled-components";
import { Button, Modal, Form, Input } from 'antd';

export const AddButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 5px;
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