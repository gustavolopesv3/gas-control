import NavBar from "./Navbar"

type LayoutProps = {
    children: JSX.Element
}

const Layout = ({children}:LayoutProps)=>{
    return(
        <div className="flex">
            <NavBar/>
            <div className="flex-1 p-10">
            {children}
            </div>
        </div>
    )
}

export default Layout