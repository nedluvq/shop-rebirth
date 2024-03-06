import { FC } from 'react';
import css from './style.module.css'
import { IItem } from './types';

const Item:FC<IItem> = (props) => {
    return (
        <div className={css.wrapped}>
            <li className={css.product_card}>
                <img className={css.image} src={props.URL} alt="rtx4090.webp" />
                <h2 className={css.product_name}>{props.name}</h2>
                <p className={css.product_desk}>{props.desc}</p>
                <p className={css.product_cost}>{props.price}</p>
                <span>
                    <button 
                    className={css.buy_button} 
                    onClick={() => {
                        window.open(
                            props.buyURL
                        )
                    }}>
                        Buy</button>
                </span>
            </li>
        </div>
    )
}

export default Item;