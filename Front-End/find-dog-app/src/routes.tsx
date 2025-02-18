import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./pages/App"
import Cadastro from "./pages/Cadastro"


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}