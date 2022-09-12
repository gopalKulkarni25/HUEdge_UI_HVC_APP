import styles from './NavItem.module.css'
import { NavLink } from 'react-router-dom';

const NavItem = ({itemname,link}) => {
    return <>
        <NavLink to={link} data-testid='navitem' className={({isActive}) => isActive ? styles.nav_item_container_active : styles.nav_item_container}>
            <div className={styles.nav_content}>
                {itemname}
            </div>
        </NavLink>
    </>
}

export default NavItem;