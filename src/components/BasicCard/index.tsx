
interface BasicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[]
    maxWidth?: string
}

export const BasicCard = ({children, maxWidth}: BasicCardProps)=>{
    return(
        <div className={`py-4 px-8 bg-white shadow-lg rounded-lg my-20 ${maxWidth}`}>
                {children}
        </div>
    )
}