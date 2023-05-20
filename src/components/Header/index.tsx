import logo from '../../assets/HeaderSVG/Group.svg'

import styles from './styles.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt='Logo principal do sistema' />
            <nav className={styles.menu}>
                <ul className={styles.menu_ul}>
                    <li className={styles.menu_li}>
                        <a href="" className={styles.menu_li_a}>Home</a>
                    </li>
                    <li className={styles.menu_li}>
                        <a href="" className={styles.menu_li_a}>Pokédex</a>
                    </li>
                    <li className={styles.menu_li}>
                        <a href="" className={styles.menu_li_a}>Legendaries</a>
                    </li>
                    <li className={styles.menu_li}>
                        <a href="https://pokeapi.co/docs/v2" target='_blank' className={styles.menu_li_a}>Documentation</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}