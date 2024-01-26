import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;

    display:flex;
    justify-content: space-between;

    margin: 120px auto 0;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 400px;
    line-height: 44px;
    color: #FFF;
`

export const SubTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: 20px 0 35px;
    line-height: 25px;
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 350px;

    form{
        max-width: 300px;
    }
`

export const TextLink = styled.p`
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    span{
        color: #23DD7A;
    }

    span:hover{
        cursor: pointer;
    }
`

