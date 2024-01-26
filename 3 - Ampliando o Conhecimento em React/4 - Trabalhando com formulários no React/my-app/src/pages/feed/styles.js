import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width:80%;
    height: 80%;

    margin: 0 auto;
    margin-top: 60px;

    display:flex;
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFF;
    margin-bottom: 24px;
`

export const TitleHighLight = styled.h3`
font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`

export const Column = styled.div`
    flex: ${({flex})=>flex};
`