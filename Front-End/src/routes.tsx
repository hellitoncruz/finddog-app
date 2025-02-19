import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"
import Abandonados from "./pages/Abandonados"


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/abandonados" element={<Abandonados />}></Route>
            </Routes>
        </BrowserRouter>
    )
}