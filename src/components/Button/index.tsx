
interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement>{
    classCss?: string,
}

export const Button = ({classCss, children, ...rest}:ButtonProps)=>{
    return(
        <button className={`hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${classCss}`} {...rest}>
            {children}
        </button>
    )
}