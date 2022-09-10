import { useContext, useEffect, useRef, useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import SecurityCard from '../SecurityCard/SecurityCard'
import styles from './SecurityContainer.module.css'
import { useNavigate } from 'react-router-dom'


import { SECURITY_GROUPS } from '../../data/securityGroups'
import { MainContext } from '../../context/ImageContext/MainContext'


const SecurityContainer = (props) => {
    const [groups,setGroups] = useState([]);
    const [udpateSection, setUpdateSection] = useState("new")
    const [filteredGroup,setFilteredGroup] = useState([])
    const sgName = useRef('')
    const [securityName,setSecurityName] = useState('')
    const [existingName,setExistingName] = useState('')
    const {securityCards,updateCostData} = useContext(MainContext)

    const navigate = useNavigate()

    const [updated,setUpdated] = useState(0);
    let temp_arr = []
    const updateHandler = (val) => {
        setUpdateSection(val)
        SECURITY_GROUPS.forEach((el) => {
                temp_arr.push(el.name)
        })
            setGroups([...temp_arr])
    }


    const [newComp,setNewComp] = useState([])

    useEffect(() => {
        console.log(securityCards)
        if(securityCards.length > 0){
            securityCards.forEach((card) => {
                updateCostData({
                    name:`security - ${card.name} type:${card.type}`,
                    data:{
                        name:`security - ${card.name}`,
                        port:card.port,
                        protocol:card.protocol,
                        source:card.source,
                        type:card.type,
                        description:card.description,
                        cost:'0'
                    },
                    cost:'0',
                    component:'security'
                })
            })
            navigate('/five')
        }

    },[securityCards])
    const addVolume = () => {
        let randomId = Math.random()
        let temp_obj = {
            id:randomId,
            el:<SecurityCard isExisting={false}/>
        }
        setNewComp([...newComp,temp_obj])
    }

    const handleSelect = (val) => {
        setExistingName(val)
        let temp = []
        SECURITY_GROUPS.forEach((item) => {
            if(item.name === val){
                item.rules.forEach(el => {
                    temp.push(el)
                })
                
            }
        })
        setFilteredGroup([...temp])

    }

    const nameChangeHanlder =() => {
        setSecurityName(sgName.current.value)
    }

    const submitHandler = () => {
        setUpdated(prev => prev+1)
        
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
                            <input type="text" name="security_name" onChange={nameChangeHanlder} ref={sgName} id="security_name" placeholder="New Security group name"/>
                        </div>
                        <div className={styles.subheading}>
                            Add Rule
                        </div>
                        <div className={styles.rule_wrapper}>
                        <div className={styles.sub_content}>
                            <SecurityCard isExisting={false} sgname={securityName} updated={updated}/>
                            {newComp.map((comp,index) =>{
                            return (
                                <SecurityCard isExisting={false} sgname={securityName} key={index} updated={updated}/>
                                )
                            }   
                            )}
                            </div>
                        </div>
                        <div className={styles.add_rule}>
                            <button onClick={addVolume}>Add Rule</button>
                        </div>
                    </div>
                    :
                    <div className={styles.existing_wrapper}>
                        <div className={styles.heading}>
                            Select Security Group
                        </div>
                        <div className={styles.dropdown}>
                            <Dropdown width='575px' options={groups} height='35px' arrowheight='5px' placeholder='Security Groups' onSelect={handleSelect}/>
                        </div>

                        <div className={styles.rules}>
                            Rules
                        </div>
                        {
                            filteredGroup && filteredGroup.map((card,index) => {
                                console.log()
                                return(<div className={styles.rule_wrapper} key={index}>
                                    <SecurityCard isExisting={true} sgname={existingName} updated={updated} card={card}/>
                                </div>)}
                            )
                        }
                    </div>}
                    </div>
                    <div className={styles.button_wrapper}>
                    <button className={styles.back_button}>Back</button>
                    <button className={styles.proceed_button} onClick={submitHandler}>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default SecurityContainer