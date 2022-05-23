interface InputProps extends React.HTMLAttributes<HTMLInputElement>{
    classCss?: string

}

export const Input = ({classCss, ...rest}:InputProps)=>{
    return(
        <input 
        className={`border-b-2 border-indigo-500 rounded ${classCss}`}
        type="text"
        {...rest}
        />
        
    )
}