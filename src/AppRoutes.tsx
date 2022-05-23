import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Layout from './Layout'
import Records from './pages/Records'
import NewRegister from './pages/Records/NewRegister'

const AppRoutes = ()=>{
    return (
        <BrowserRouter>
        <Layout>
           <Routes>
               <Route path="/" element={<h1>OK</h1>}/>
               <Route path="/registers" element={<Records/>}/>
               <Route path="/registers/new" element={<NewRegister/>}/>
           </Routes>
        </Layout>
        </BrowserRouter>
    )

}

export default AppRoutes