import { useContext, useEffect, useRef, useState } from 'react'
import { MainContext } from '../../context/ImageContext/MainContext'
import Dropdown from '../Dropdown/Dropdown'
import styles from './StorageCard.module.css'

const OPTIONS = ["Magnetic Disks","SSD"]

const StorageCard = ({isdefault, onRemoveItem, index,updated,onUpdate,review,data}) => {
    const [validation,setValidation]= useState({isvalid:true,message:''})

    const {addStorageCards} = useContext(MainContext)
    const capacityRef = useRef('')
    const encryption = useRef(false)
    const backup = useRef(false)
    const remarks=useRef('')
    let encryptionVal = ''
    let backupVal = ''


    const [allFieldsupdated,setAllFieldsupdated] = useState(false);

    const [storageVal,setStorageVal] = useState("")
    let unitval2 = 'TB'
    let unitval1 = 'GB'
    const [iops,setIops] = useState("");

    // const [volumeData,setVolumeData] = useState({type:'',volume:'',capacity:'',encryption:false,iops:'',backup:false,remarks:''});

    // const onProceed = () => {
    //     console.log("storage")
    // }

    let volumeVal = ''
    
    // useEffect(() => {
    //     if(isdefault){
    //         volumeVal='Root'
    //     }
    //     else{
    //         volumeVal='EXT'
    //     }
    //     if(capacityRef.current.value !=='' && storageVal !== '' && iops !=='' && encryption.current.vale !==false){
    //         onUpdate({storage:storageVal,
    //                   volume:volumeVal,
    //                   encryption:encryption.current.checked,
    //                   iops_val:iops,
    //                   capacity:capacityRef.current.value,
    //                   backup:backup.current.checked,
    //                   remarks:remarks.current.value
    //                 })
    //     }
    // // eslint-disable-next-line
    // },[allFieldsupdated])


    //onLoad of the page
    useEffect(() => {
        if(review){
            capacityRef.current.value=data.capacity
            remarks.current.value = data.remarks ? data.remarks : ''
            encryption.current.checked = data.encryption
            backup.current.checked = data.backup
        }
    },[])

    useEffect(() => {
        if(updated !== 0){
        console.log('updating ',updated)
        if(isdefault){
            volumeVal='Root'
        }
        else{
            volumeVal='EXT'
        }
        if(capacityRef.current.value !=='' && storageVal !== '' && iops !==''){
            addStorageCards({storage:storageVal,
                      volume:volumeVal,
                      encryption:encryption.current.checked,
                      iops_val:iops,
                      capacity:capacityRef.current.value,
                      backup:backup.current.checked,
                      remarks:remarks.current.value
                    })
        }}
    },[updated])

    const handleChange = (val) => {
        capacityRef.current.value = ""
        setStorageVal(val)
        setAllFieldsupdated(prev => !prev);
    }

    // useImperativeHandle(
    //     ref,
    //     () => ({
    //         updateContextFromChild() {
    //             console.log("updating....",storageVal)
    //         }
    //     }),
    // )

    const onEncryptionChange = () => {
        if(encryption.current.checked === true){
            setAllFieldsupdated(prev => !prev)
            encryptionVal = 'true'
        }
        else{
            encryptionVal = 'false'
        }
    }

    const onBackupChange = () => {
        if(backup.current.checked === true){
            setAllFieldsupdated(prev => !prev)
            backupVal = 'true'
        }
        else{
            backupVal = 'false'
        }
    }

    const onRemarksChange = () => {
        setAllFieldsupdated(prev => !prev)
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
                if(capacityRef.current.value.includes(unitval2) || capacityRef.current.value.includes(unitval1)){
                setAllFieldsupdated(prev => !prev)
                }
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
                if(capacityRef.current.value.includes(unitval2) || capacityRef.current.value.includes(unitval1)){
                    setAllFieldsupdated(prev => !prev)
                }
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
                    <div className={styles.type} style={{ pointerEvents: review ? 'none' : 'auto' }}>
                        <Dropdown options={OPTIONS} onSelect={handleChange} parentName='storage' placeholder={review ? data.storage : 'choose'} width='148px' height='32px' arrowheight='6px'/>
                    </div>
                </div>
                <div>
                    <p>Volume</p>
                    {review ? <div className={styles.volume}>
                        {data.volume}
                    </div>:<div className={styles.volume}>
                        {isdefault ? 'Root': 'Ext'}
                    </div>}
                </div>
                <div>
                    <p>Capacity</p>
                    <div className={styles.capacity}>
                        <input onChange={onCapacityChange} style={{ pointerEvents: review ? 'none' : 'auto' }} ref={capacityRef}  placeholder="eg.10GB" type="text"/>
                    </div>
                </div>
                <div>
                    <p>Encryption</p>
                    <div className={styles.encryption}>
                        <input type="checkbox" ref={encryption} style={{ pointerEvents: review ? 'none' : 'auto' }} onChange={onEncryptionChange} id="encryption" name="encryption" />
                    </div>
                </div>
                <div>
                    <p>IOPS</p>
                    <div className={styles.iops}>
                        {review ? data.iops_val : iops}
                    </div>
                </div>
                <div>
                    <p>Backup Required</p>
                    <div className={styles.backup}>
                        <input type="checkbox" ref={backup} style={{ pointerEvents: review ? 'none' : 'auto' }} onChange={onBackupChange} id="backup" name="backup" />
                    </div>
                </div>
                <div>
                    <p>Remarks</p>
                    <div className={styles.remarks}>
                        <input type="text" ref={remarks} style={{ pointerEvents: review ? 'none' : 'auto' }}  onChange={onRemarksChange}/>
                    </div>
                </div>
            </div>
            {(!isdefault && !review) && <div onClick={() => onRemoveItem(index)}className={styles.remove_vol}>
                <span>x</span>
            </div>}
            </div>
            
        </>
    )
}

export default StorageCard