import { FlexDiv } from "../styles/globalStyleComponent";

type InputPropsType = {
    type:React.HTMLInputTypeAttribute
    name:string
    label:string
    labelFor:string
    required?:boolean
    pattern?:string
    title?:string
    errorMessage?:string
}

export const Input = ({type, name, label, labelFor, pattern,title, required, errorMessage}:InputPropsType)=>{
    return(
        <FlexDiv flex="1" width="100%" flexDirection="column" className="input-wrapper">
            <label htmlFor={labelFor}>
                <span>{label}</span>
                {errorMessage? <span className="error-message">{errorMessage}</span>:''}
            </label>
            <input  autoComplete="true"
                    type={type} 
                    id={labelFor} 
                    name={name} 
                    pattern={pattern?pattern:".*?"} 
                    title={title?title:'At least one number of letters and numbers.'}
                    required={required?true:false}/>
        </FlexDiv>
    )
}