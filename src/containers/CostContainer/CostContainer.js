
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/ImageContext/MainContext';
import styles from './CostContainer.module.css';


const CostConatiner = (props) => {
    const {costData} = useContext(MainContext)
    const [totalAmount, setTotalAmount] = useState(0);
    let total = 0;

    useEffect(() => {
        costData.forEach((el) => {
            total = parseInt(totalAmount)+parseInt(el.cost);
        })
        setTotalAmount(total.toString())
    },[costData,total])
    console.log(costData)

    return <>
        <div className={styles.main}>
        <div className={styles.heading}>Cost Estimate</div>
            {costData.length>0 && 
                <div className={styles.content}>
                    {costData[0].name}  <span>{costData[0].cost}</span>
                </div>
            }
            <div className={styles.total}>
                    total <span>{totalAmount}</span>
            </div>
        </div>

    </>
}

export default CostConatiner