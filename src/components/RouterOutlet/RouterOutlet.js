import { Outlet } from "react-router-dom"
import styles from "./RouterOutlet.module.css"

const RouterOutlet = (props) => {
    return <>
        <div className={styles.container} data-testid='router-outlet'>
            <Outlet/>
        </div>
    </>
}

export default RouterOutlet