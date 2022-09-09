import { useState } from 'react'
import SecurityCard from '../SecurityCard/SecurityCard'
import styles from './SecurityContainer.module.css'



const SecurityContainer = (props) => {

    const [udpateSection, setUpdateSection] = useState("new")

    const updateHandler = (val) => {
        setUpdateSection(val)
    }

    return (
        <>
            <div className={styles.main_wrapper}>
                    <div className={styles.radio_buttons}>
                        <div>
                        <input type="radio" id="group" name="group" value="new" onClick={() => updateHandler("new")} defaultChecked/>
                        <label htmlFor='group'>Create a new security group</label>
                        </div>
                        <input type="radio" id="group" name="group" value="existing"onClick={() => updateHandler("existing")}/>
                        <label htmlFor='group'>Select an existing security group</label>
                    </div>
                    <div className={styles.sub_wrapper}>
                    { udpateSection === "new" ?
                    <div className={styles.new_wrapper}>
                        <div className={styles.heading}>
                            New Security Group
                        </div>
                        <div className={styles.new_input}>
                            <input type="text" name="security_name" id="security_name" placeholder="New Security group name"/>
                        </div>
                        <div className={styles.subheading}>
                            Add Rule
                        </div>
                        <div className={styles.rule_wrapper}>
                            <SecurityCard/>
                        </div>
                        <div className={styles.add_rule}>
                            <button>Add Rule</button>
                        </div>
                    </div>
                    :
                    <div className={styles.existing_wrapper}>
                        <div className={styles.heading}>
                            Select Security Group
                        </div>
                    </div>}
                    </div>
            </div>
        </>
    )
}

export default SecurityContainer