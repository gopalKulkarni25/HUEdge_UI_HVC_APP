import StorageCard from '../StorageCard/StorageCard';
import styles from './StorageContainer.module.css'
import { useState } from 'react';
import ReactSlider from "react-slider";

const StorageContainer = (props) => {
    const [newComp,setNewComp] = useState([])
    const addVolume = () => {
        let randomId = Math.random()
        let temp_obj = {
            id:randomId,
            el:<StorageCard isdefault={false} onRemoveItem={removeItemHandler} index={randomId}/>
        }
        setNewComp([...newComp,temp_obj])
    }

    const removeItemHandler = (id) => {
        console.log(id);
        let temp_arr = [];
        newComp.forEach((el) => {
            if(el.id !== id){
                console.log(el)
                temp_arr.push(el)
            }
        })
        console.log(temp_arr)
        setNewComp([...temp_arr])

        //  
    }

    return (
        <>
            <div className={styles.main_wrapper}>
                <div className={styles.sub_content}>
                <StorageCard isdefault={true} onRemoveItem={removeItemHandler} index={null}/>
                {newComp.map((comp,index) =>{
                        return (
                            <div key={index}>{comp.el}</div>
                        )
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
                    <button className={styles.proceed_button}>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default StorageContainer;