import styled from "styled-components";

export const InputContainer = styled.div`
    height: 62px;
    width: 80%;

    margin: 20px;

    input{
        background: transparent;
        border: 1px solid #FAFAFA;
        border-radius: 20px;

        width:100%;
        height: 62px;

        padding: 0 20px;
        color: white;
        font-size: 20px;
    }

    input:focus{
        outline: none !important;
        border: 2px solid green;
      }
`