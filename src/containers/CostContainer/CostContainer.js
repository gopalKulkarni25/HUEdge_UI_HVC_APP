
import { useContext } from 'react';
import { MainContext } from '../../context/ImageContext/MainContext';
import styles from './CostContainer.module.css';


const CostConatiner = (props) => {
    const {costData,totalAmount} = useContext(MainContext)
   

    return <>
        <div className={styles.main}>
        <div className={styles.heading}>Cost Estimate</div>
            {costData.length>0 && 
                costData.map((comp,index) => 
                    <div className={styles.content} key={index}>
                        {comp.name} <span>{comp.cost}</span>
                    </div>
                )
            }
            <div className={styles.total}>
                    <span>{costData ? `$ ${totalAmount}/mo` : '$0.0/mo'}</span>
            </div>
        </div>

    </>
}

export default CostConatiner