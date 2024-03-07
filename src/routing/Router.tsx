import { BrowserRouter, Route, Routes } from "react-router-dom"
import GPU from "../components/CPU/CPU"
import Shop from "../pages/Shop/Shop"
import CPU from "../components/CPU/CPU"

export const Router = () => {
    <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path="/CPU" element={<CPU />} />
                <Route path="/GPU" element={<GPU />} />
            </Routes>
}