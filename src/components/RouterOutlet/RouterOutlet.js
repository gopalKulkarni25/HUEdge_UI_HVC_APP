import { Outlet } from "react-router-dom"
import styles from "./RouterOutlet.module.css"

const RouterOutlet = (props) => {
    return <>
        <div className={styles.container}>
            <Outlet/>
        </div>
    </>
}

export default RouterOutlet