import { FlexDiv } from "../styles/globalStyleComponent";

type InputPropsType = {
    type:React.HTMLInputTypeAttribute
    name:string
    label:string
    labelFor:string
    required?:boolean
    pattern?:string
}

export const Input = ({type, name, label, labelFor, pattern, required}:InputPropsType)=>{
    return(
        <FlexDiv flex="1" width="100%" flexDirection="column" className="input-wrapper">
            <label htmlFor={labelFor}>{label}</label>
            <input type={type} id={labelFor} name={name} pattern={pattern?pattern:''} required={required?true:false}/>
        </FlexDiv>
    )
}