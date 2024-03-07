import { useEffect, useState } from 'react'
import css from './style.module.css'
import { getCPU } from '../../api/productsApi'
import Item from '../Item/Item'

const GPU = () => {
    const [data, setData] = useState<{ name: string, desc: string, price: string | number, URL: string,buyURL: string, }[]>([])
    useEffect( () => {
        getCPU().then(data => setData(data))
    }, [])
    return (
        <div>
            <div className={css.wrapper}>
                {data.map((data,index) => <Item name={data.name} desc={data.desc} price={data.price} URL={data.URL} buyURL={data.buyURL} key={index}/>)}
            </div>
        </div>
    )
}

export default GPU