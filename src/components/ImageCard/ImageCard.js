import { useContext } from 'react'
import { MainContext } from '../../context/ImageContext/MainContext'
import styles from './ImageCard.module.css'
import { useNavigate } from "react-router-dom";

const ImageCard = ({name,desc,radios,review,radio_sel}) => {
    
    let navigate = useNavigate();

    const {updateCostData,updateIsAuthenticated} = useContext(MainContext)
    let cost = ''
    let value= ''
    const updateradioInfo = (price,val) => {
        cost = price
        value = val
    }
    let isSelected = false;

    const updateData = () => {
        updateIsAuthenticated(true)
        //this works when the users clicks on select with default radio checked
        if(cost === ''){
            cost = radios[0].price
            value = radios[0].name
        }
        if(!isSelected){
        updateCostData({
            name,
            data:{
                name,
                desc,
                radios:value
            },
            cost,
            component:'image'
        })
        navigate('/instance')
        }
        isSelected = true;
    }
    
    return (
        <>
            <div className={styles.main_container} data-testid ='image'>
                <div className={styles.grey_image}></div>
                <div className={styles.content}>
                    <div className={styles.content_heading}>{name}</div>
                    <div className={styles.content_desc}>{desc}</div>
                </div>
                <div className={styles.button_select}>
                    <div className={styles.button_radio} data-testid='radio'>
                        {review ? <p>{radio_sel}</p> : 
                        radios.map((radio,index) => {
                        return(<div key={index} >
                        {radios.length>1 && <input data-testid='radio' type="radio" id="sys" name={`${name}_bit`} value={radio.name} onChange={() => updateradioInfo(radio.price,radios.name)} defaultChecked={index===0?true:false}/>}
                        <label htmlFor="architecture">{radio.name}</label><br></br></div>)
                        })
                        // <>
    
                        // <input type="radio" id="sys" name={`${name}_bit`} value={radios[0].name} onChange={() => updateradioInfo(radios[0].price,radios[0].name)} defaultChecked/>
                        // <label htmlFor="architecture">64-bit (x86)</label><br></br>
                        //  <input type="radio" id="sys" name={`${name}_bit`} onChange={() => updateradioInfo(radios[1].price,radios[1].name)} value={radios[1].name}/>
                        // <label htmlFor="architecture">64-bit (ARM)</label></>
                        }
                    </div>
                    {!review && <div className={styles.button}>
                        <button data-testid ='image-button-select' style={{marginTop: radios.length === 1 ? '40px':''}} onClick={updateData}>Select</button>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default ImageCard;