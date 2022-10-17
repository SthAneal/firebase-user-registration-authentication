import React from "react"

type ButtonPropType = {
    children:React.ReactNode
    typeVariant:'contained'|'outlined'|'text'
    typeColor?:'primary'|'secondary'
    width?:string
    onClickFnc?:()=>void
}

export const Button = ({children, typeVariant, typeColor, width, onClickFnc}:ButtonPropType)=>{
    
    return(
       <button 
        style={{width:`${width ? width:'100%'}`}} 
        className={`${typeVariant} ${typeColor}`}
        onClick={onClickFnc?()=>onClickFnc():()=>console.log('do nothing')}
        >{children}</button>
    )
}