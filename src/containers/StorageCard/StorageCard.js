import { useRef, useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import styles from './StorageCard.module.css'

const OPTIONS = ["Magnetic Disks","SSD"]

const StorageCard = ({isdefault, onRemoveItem, index}) => {
    const [validation,setValidation]= useState({isvalid:true,message:''})
    const capacityRef = useRef('')
    const [storageVal,setStorageVal] = useState("")
    let unitval2 = 'TB'
    const [iops,setIops] = useState("");

    const handleChange = (val) => {
        capacityRef.current.value = ""
        setStorageVal(val)
    }

    const onCapacityChange = () => {
        if(/^(d\{2}[A-Z])$/.test(capacityRef.current.value) === false){
            setValidation({isvalid: false, message:"Please enter in format eg.10GB"})
        }
        if(storageVal === "Magnetic Disks"){
            let capacity = capacityRef.current.value.length ===4 ?
                            parseInt(capacityRef.current.value.substring(0,2)):
                            parseInt(capacityRef.current.value.substring(0,3))
            console.log(capacity)
            if(capacityRef.current.value.includes(unitval2)){
                console.log("TB")
                capacity = capacity*1024
                console.log(capacity)
            }
            if(capacity <100){
                setIops("100")
            }
            else if(capacity >= 100 && capacity <= 500){
                setIops("600")
            }
            else if(capacity > 500){
                setIops("1000")
            }
            if(capacity < 40 || capacity >2048){
                console.log(capacity)
                setValidation({isvalid: false, message:"Please enter memeory between 40GB and 2TB"})
            }
            else{
                setValidation({isvalid:true,message:''})
            }
        }
        if(storageVal === "SSD"){
            let capacity = capacityRef.current.value.length ===4 ?
                            parseInt(capacityRef.current.value.substring(0,2)):
                            parseInt(capacityRef.current.value.substring(0,3))
            console.log(capacity)
            if(capacityRef.current.value.includes(unitval2)){
                console.log("TB")
                capacity = capacity*1024
            }
            if(capacity <100){
                setIops("100")
            }
            else if(capacity >= 100 && capacity <= 500){
                setIops("600")
            }
            else if(capacity > 500){
                setIops("1000")
            }
            if(capacity < 20 || capacity >512){
                console.log(capacity)
                setValidation({isvalid: false, message:"Please enter memeory between 20GB and 512GB"})
            }
            else{
                setValidation({isvalid:true,message:''})
            }
        }

    }

    return (
        <>
            { !validation.isvalid && <div style={{color:'red'}}>{validation.message}</div>}
            <div className={styles.main_wrapper}>
                <div className={styles.wrapper}>
                <div>
                    <p>Type</p>
                    <div className={styles.type}>
                        <Dropdown options={OPTIONS} onSelect={handleChange} parentName='storage' placeholder='choose'/>
                    </div>
                </div>
                <div>
                    <p>Volume</p>
                    <div className={styles.volume}>
                        {isdefault ? 'Root': 'Ext'}
                    </div>
                </div>
                <div>
                    <p>Capacity</p>
                    <div className={styles.capacity}>
                        <input onChange={onCapacityChange} ref={capacityRef} placeholder="eg.10GB" type="text"/>
                    </div>
                </div>
                <div>
                    <p>Encryption</p>
                    <div className={styles.encryption}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div>
                    <p>IOPS</p>
                    <div className={styles.iops}>
                        {iops}
                    </div>
                </div>
                <div>
                    <p>Backup Required</p>
                    <div className={styles.backup}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div>
                    <p>Remarks</p>
                    <div className={styles.remarks}>
                        <input type="text"/>
                    </div>
                </div>
            </div>
            {!isdefault && <div onClick={() => onRemoveItem(index)}className={styles.remove_vol}>
                <span>x</span>
            </div>}
            </div>
            
        </>
    )
}

export default StorageCard