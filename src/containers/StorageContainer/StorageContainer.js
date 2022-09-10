import StorageCard from '../StorageCard/StorageCard';
import styles from './StorageContainer.module.css'
import { useContext, useEffect, useState } from 'react';
import ReactSlider from "react-slider";
import { MainContext } from '../../context/ImageContext/MainContext';
import { useNavigate } from "react-router-dom";

const StorageContainer = (props) => {
    const [newComp,setNewComp] = useState([])
    const [updated,setUpdated] = useState(0);
    const {storageCards,updateCostData} = useContext(MainContext)
    const navigate = useNavigate()
    let temp = []
    let cost = ''
    useEffect(() => {
        console.log(storageCards)
        if(storageCards.length > 0){
            storageCards.forEach((cell) => {
                
                    if(cell.storage === 'Magnetic Disks'){
                        cost = '20'
                        updateCostData({
                            name:`storage - ${cell.volume}`,
                            data:{
                                name:`storage - ${cell.volume}`,
                                volume:cell.volume,
                                storage:cell.storage,
                                capacity:cell.capacity,
                                encryption:cell.encryption,
                                backup:cell.backup,
                                iops_val:cell.iops_val,
                                remarks:cell.remarks,
                                cost:cost
                            },
                            cost:cost
                        })
                    }
                    else if(cell.storage === 'SSD'){
                        cost = '40'
                        updateCostData({
                            name:`storage - ${cell.volume}`,
                            data:{
                                name:`storage - ${cell.volume}`,
                                volume:cell.volume,
                                storage:cell.storage,
                                capacity:cell.capacity,
                                encryption:cell.encryption,
                                backup:cell.backup,
                                iops_val:cell.iops_val,
                                remarks:cell.remarks,
                                cost:cost
                            },
                            cost:cost
                        })
                    }
                    
                navigate('/fourth')
                // updateCostData({
                //     name:`storage - ${selectedCPUInstance.volume}`,
                //     data:{
                //         volume:`storage - ${selectedCPUInstance.volume}`,
                //         type:selectedCPUInstance.type,
                //         cost:cpuCost
                //     },
                //     cost:cpuCost
                // })
            })
        }
    },[storageCards])
    const addVolume = () => {
        let randomId = Math.random()
        let temp_obj = {
            id:randomId,
            el:<StorageCard isdefault={false} onRemoveItem={removeItemHandler} key={Math.random()} index={randomId} updated={updated} />
        }
        setNewComp(prev => [...prev,temp_obj])
        temp.push(temp_obj)
    }

    const removeItemHandler = (index) => {
        console.log(index);
        setNewComp(current => current.filter((comp) => current.indexOf(comp) !== index))
    }

   

    const submitHandler = () => {
        setUpdated(prev => prev+1)
        
    }

    return (
        <>
        {console.log(updated)}
            <div className={styles.main_wrapper}>
                <div className={styles.sub_content}>
                <StorageCard isdefault={true} updated={updated} onRemoveItem={removeItemHandler}  index={null}/>
                {newComp.map((comp,index) =>{
                        // return (
                        //     <div key={index}>{comp.el}</div>
                        // )
                        return <StorageCard isdefault={false} updated={updated} onRemoveItem={removeItemHandler} key={index} index={index}/>
                    }
                )}
                </div>
                <div className={styles.add_vol}>
                    <button onClick={addVolume}>Add Volume</button>
                </div>
                <div className={styles.network_slider}>
                    <ReactSlider />
                </div>
                <div className={styles.button_wrapper}>
                    <button className={styles.back_button}>Back</button>
                    <button className={styles.proceed_button} onClick={submitHandler}>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default StorageContainer;