
import { useContext} from 'react';
import { MainContext } from '../../context/ImageContext/MainContext';
import styles from './CostContainer.module.css';


const CostConatiner = (props) => {
    const {costData,totalAmount} = useContext(MainContext)

    return <>
        <div className={styles.main} data-testid='cost'>
        <div className={styles.heading}>Cost Estimate</div>
        <div className={styles.details}>
            {costData.length>0 && 
                costData.map((comp,index) => 
                    <div className={styles.content} key={index}>
                        <div className={styles.name}>{comp.name}</div> <div className={styles.cost}>${comp.cost}</div>
                    </div>
                )
            }
            </div>
            <div className={styles.total}>
                    <span>{costData ? `$${totalAmount}/mo` : '$0.0/mo'}</span>
            </div>
        </div>

    </>
}

export default CostConatiner