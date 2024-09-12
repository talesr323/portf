import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Projetos from "./pages/Projetos";
import PageNotFound from "./pages/PageNotFound";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Sobre" element={<Sobre/>}></Route>
                <Route path="/Contatos" element={<Contatos/>}></Route>
                <Route path="/Projetos" element={<Projetos/>}></Route>
                <Route path="/*" element={<PageNotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;