import { useContext } from 'react'
import { MainContext } from '../../context/ImageContext/MainContext'
import styles from './ImageCard.module.css'
import { useNavigate } from "react-router-dom";

const ImageCard = ({name,desc,radios}) => {
    
    let navigate = useNavigate();

    const {updateCostData,updateIsAuthenticated} = useContext(MainContext)
    let cost = ''
    const updateradioInfo = (price) => {
        cost = price
    }
    let isSelected = false;

    const updateData = () => {
        updateIsAuthenticated(true)
        //this works when the users clicks on select with default radio checked
        if(cost === ''){
            cost = radios[0].price
        }
        if(!isSelected){
        updateCostData({
            name,
            data:{
                name,
                desc,
                radios
            },
            cost,
        })
        navigate('/second')
        }
        isSelected = true;
    }
    
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.grey_image}></div>
                <div className={styles.content}>
                    <div className={styles.content_heading}>{name}</div>
                    <div className={styles.content_desc}>{desc}</div>
                </div>
                <div className={styles.button_select}>
                    <div className={styles.button_radio}>
                        <input type="radio" id="sys" name={`${name}_bit`} value={radios[0].name} onChange={() => updateradioInfo(radios[0].price)} defaultChecked/>
                        <label htmlFor="architecture">64-bit (x86)</label><br></br>
                        <input type="radio" id="sys" name={`${name}_bit`} onChange={() => updateradioInfo(radios[1].price)} value={radios[1].name}/>
                        <label htmlFor="architecture">64-bit (ARM)</label>

                    </div>
                    <div className={styles.button}>
                        <button onClick={updateData}>Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCard;