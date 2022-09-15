type ButtonPropType = {
    children:React.ReactNode
    typeVariant:'contained'|'outlined'|'text'
    typeColor?:'primary'|'secondary'
    width?:string
}

export const Button = ({children, typeVariant, typeColor, width}:ButtonPropType)=>{
    
    return(
       <button style={{width:`${width ? width:'100%'}`}} className={`${typeVariant} ${typeColor}`}>{children}</button>
    )
}