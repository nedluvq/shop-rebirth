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
            <div className={css.wrapper}>
                <div className={css.nav}>
                    <div className={css.dropdown}>
                    <button className={css.dropbtn}>Menu</button>
                        <div className={css.dropdown_content}>
                        <Link to="/GPU"><p>GPU</p></Link>
                        <Link to="/CPU"><p>CPU</p></Link>
                        </div>
                </div>
                    
                </div> 
                
                <Routes>
                    <Route path="*" element={<Shop/>} />
                    <Route path="/CPU" element={<CPU />} />
                    <Route path="/GPU" element={<GPU />} />
                </Routes>
            </div>
        </div>
    )
}

export default Shop