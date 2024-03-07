import { Link, Route, Routes } from "react-router-dom"
import CPU from "../../components/CPU/CPU"
import GPU from "../../components/GPU/GPU"
import css from './style.module.css'

const Shop = () => {
    return (
        <div>
            <div className={css.header}>
                <h1 className={css.name}>
                    Gaming Parts
                </h1>
            </div>
            <div className={css.nav}>
                <Link to="/GPU"><p className={css.part}>GPU</p></Link>
                <Link to="/CPU"><p className={css.part}>CPU</p></Link>
            </div> 
            
            <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path="/CPU" element={<CPU />} />
                <Route path="/GPU" element={<GPU />} />
            </Routes>
        </div>
    )
}

export default Shop