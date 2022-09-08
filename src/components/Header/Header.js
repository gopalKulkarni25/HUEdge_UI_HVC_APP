import styles from './Header.module.css'

const Header = ({heading}) => {
    return <>
            <div className={styles.header}>
                <div className={styles.header_content}>{heading}</div>
            </div>
        </>
}

export default Header