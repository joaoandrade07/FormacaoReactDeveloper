import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    height: auto;

    h3{
        font-size: 32px;
        color: #FAFAFA;;
    }

    p{
        font-size:16px;
        color: #FAFAFA60;
        margin: 20px 0;

    }

    div{
        display: flex;
        align-items: center;
        gap: 10px;
        text-align:center;
    }

    a{
        text-decoration:none;
    }

    button{
        color: #F00;

        padding: 5px 20px;
        
        border-radius: 8px;
        background: #FAFAFA;
        border: 1px solid #FAFAFA;
    }

    button:hover{
        background: #FAFAFA40;
        cursor: pointer;
    }

    a button{
        color:#00F;
    }

    hr{
        color:#FAFAFA60;
        margin:20px 0;
    }

`