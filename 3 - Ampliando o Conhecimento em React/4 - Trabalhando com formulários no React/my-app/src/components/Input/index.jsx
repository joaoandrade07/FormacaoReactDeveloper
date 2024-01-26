import { InputContainer, IconContainer, InputText, TextError} from "./styles"
import { Controller } from "react-hook-form"

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>):null}

        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field}{...rest}/>}/>
    </InputContainer>
    {errorMessage? <TextError>{errorMessage}</TextError>:null}
    </>
  )
}

export default Input;
