import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;

    height: 30px;
`

export const TextError = styled.p`
    color: #F00;
    font-size: 12px;
    margin: 5px 0;
`

export const InputText = styled.input`
    width:100%;

    background-color: transparent;
    color: #FFF;
    border: 0;
    height:30px;
`