import styles from './Header.module.css'

const Header = ({heading}) => {
    return <>
            <div className={styles.header} data-testid='header'>
                <div className={styles.header_content}>{heading}</div>
            </div>
        </>
}

export default Header