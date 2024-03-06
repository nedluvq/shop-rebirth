import css from './style.module.css'
import vkPicture from '../../resources/vk.webp'

const Header = () => {
    return (
        <div className={css.header}>
            <ul className={css.flex}>
                <li className={css.shop_name}>
                    nedluvq shop
                </li>
                <li className={css.shop_name}>
                        <img src={vkPicture} className={css.image}/>
                </li>
            </ul>
        </div>
    )
}

export default Header