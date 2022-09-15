import { FlexDiv } from "../styles/globalStyleComponent";

type InputPropsType = {
    type:React.HTMLInputTypeAttribute
    name:string
    label:string
    labelFor:string
    required?:boolean
}

export const Input = ({type, name, label, labelFor, required}:InputPropsType)=>{
    return(
        <FlexDiv flex="1" width="100%" flexDirection="column" className="input-wrapper">
            <label htmlFor={labelFor}>{label}</label>
            <input type={type} id={labelFor} name={name} required={required?true:false}/>
        </FlexDiv>
    )
}