import StorageCard from '../StorageCard/StorageCard';
import styles from './StorageContainer.module.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from '../../context/ImageContext/MainContext';
import { useNavigate } from "react-router-dom";

const StorageContainer = (props) => {
    const [newComp,setNewComp] = useState([])
    const [updated,setUpdated] = useState(0);
    const {storageCards,updateCostData,costData} = useContext(MainContext)
    const navigate = useNavigate()
    const networkRef = useRef();

    let temp = []
    let cost = ''
    let cost_network = ''
    useEffect(() => {
        console.log(storageCards)
        if(storageCards.length > 0 && costData.length<4){
            storageCards.forEach((cell) => {
                
                    if(cell.storage === 'Magnetic Disks'){
                        // eslint-disable-next-line
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
                            cost:cost,
                            component:'storage'
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
                            cost:cost,
                            component:'storage'
                        })
                    }
            })

            let bandwidth = (parseInt(networkRef.current.value)*256)
                    let bandwidth_str = bandwidth.toString()
                    if(bandwidth < 512){
                        // eslint-disable-next-line
                        cost_network='0'
                    }
                    else if(bandwidth >=512 && bandwidth <1024 ){
                        cost_network = '5'
                    }
                    else if(bandwidth >=1024 && bandwidth < 1536){
                        cost_network = '10'
                    }
                    else if(bandwidth >=1536 && bandwidth <= 2048){
                        cost_network = '15'
                    }
                    const index = costData.map(i => i.component).indexOf("network")
                    console.log(index)
                    if(index === -1){
                    console.log('updateing network')
                    updateCostData({
                        name:`Network bandwidth ${bandwidth_str}GB`,
                        data:{
                            bandwidth:bandwidth_str,
                            cost:cost_network
                        },
                        cost:cost_network,
                        component:'network'
                    })}
                    navigate('/security')
        }
    },[storageCards])

    const handleNetworkChange = () => {
        console.log(typeof(networkRef.current.value))
    }
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
                    <div className={styles.network}>Network Bandwidth Configuration</div>
                    <div className={styles.network_sub}>Outbound Traffic</div>
                    256GB<input type='range' defaultValue={0} min="1" max="8" step={1} ref={networkRef} onChange={handleNetworkChange}/>2TB
                </div>
                <div className={styles.button_wrapper}>
                    <button className={styles.back_button} onClick={() => {navigate('/instance')}}>Back</button>
                    <button className={styles.proceed_button} onClick={submitHandler}>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default StorageContainer;