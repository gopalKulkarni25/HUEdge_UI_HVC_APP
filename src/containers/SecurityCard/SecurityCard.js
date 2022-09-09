import styles from './SecurityCard.module.css'
import Dropdown from '../Dropdown/Dropdown'

const OPTIONS = [
    "HTTPS", "SSH", "SMTP"
]

const SecurityCard = (props) => {
    return(
        <>
            <div className={styles.main_wrapper}>
                <div>
                    <p>Type</p>
                    <div className={styles.type}>
                        <Dropdown options={OPTIONS} parentName='security' placeholder='type'/>
                    </div>
                </div>
                <div>
                    <p>Protocol</p>
                    <div className={styles.text_area}>
                        <input type="text" placeholder='TCP'/>
                    </div>
                </div>
                <div>
                    <p>Port Range</p>
                    <div className={styles.text_area} >
                        <input type="text" placeholder='443'/>
                    </div>
                </div>
                <div>
                    <p>Source</p>
                    <div className={styles.text_area}>
                        <input type="text"/>
                    </div>
                </div>
                <div>
                    <p>Description</p>
                    <div className={styles.text_area} >
                        <input type="text" placeholder='some remarks'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityCard