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
                <GPU />
                <CPU />
        </div>
    )
}

export default Shop