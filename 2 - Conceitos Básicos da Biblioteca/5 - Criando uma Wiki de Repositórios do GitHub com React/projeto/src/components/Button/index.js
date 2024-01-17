import {ButtonContainer} from './styles'

const Button = ({onClick, text}) =>{
    return(
        <ButtonContainer onClick={onClick}>
            {text}
        </ButtonContainer>
    )
}

export default Button;