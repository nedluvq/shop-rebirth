import Image from '../../resources/github-mark-white.svg'
import css from './style.module.css'

const Footer = () => {
    return (
        <footer>
            <a onClick={() => window.open('https://github.com/nedluvq')}><img src={Image} /></a>
            <p className={css.footer_text}>2024</p>
        </footer>
    )
}

export default Footer