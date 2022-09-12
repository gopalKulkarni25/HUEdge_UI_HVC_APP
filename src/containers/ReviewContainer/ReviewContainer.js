
import { useEffect, useState,useContext } from 'react'
import ImageCard from '../../components/ImageCard/ImageCard'
import { MainContext } from '../../context/ImageContext/MainContext'
import styles from './ReviewContainer.module.css'
import StorageCard from '../StorageCard/StorageCard'
import SecurityCard from '../SecurityCard/SecurityCard'
import SuccessModel from '../../components/SuccessModel/SuccessModel'
import { useNavigate } from 'react-router-dom'

const ReviewContainer = (props) => {
    const {costData} = useContext(MainContext)
    const [storage,setStorage] = useState([])
    const [security,setSecurity] = useState([])
    const [success,setSuccess] = useState(false)
    const navigate = useNavigate()

    //on load of review page
    useEffect(() => {
        let temp_storage = []
        let temp_security = []
        costData.forEach((data) => {
            if(data.component === 'storage'){
                temp_storage.push(data.data)
                setStorage(temp_storage)
            }
            if(data.component === 'security'){
                temp_security.push(data.data)
                setSecurity(temp_security)
            }
        })
        // eslint-disable-next-line
    },[])

    const generateJson = () => {
        const fileName = "HVC_VM_config";
        const json = JSON.stringify(costData, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);
      
        // create "a" HTLM element with href to file
        const link = document.createElement("a");
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
      
        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }

    const successHandler = () => {
        setSuccess(true);
    }

    return (
        <>
        {console.log(costData)}
        {console.log(storage)}
            {success && <SuccessModel/>}
            {costData && <div className={styles.main_wrapper} style={{pointerEvents: success ? 'none':'auto',opacity: success ? 0.2:1}}>
                <div className={styles.generate_btn}>
                    <button onClick={generateJson}>Generate JSON</button>
                </div>
                <div className={styles.sub_wrapper}>
                <div className={styles.image_wrapper}>
                    <div className={styles.heading}>Image</div>
                    <ImageCard review={true} radio_sel={costData[0].data.radios} name={costData[0].data.name} desc={costData[0].data.desc}/>
                </div>

                <div className={styles.instance_wrapper}>
                    <div className={styles.heading}>Instance</div>
                    {!costData[1]? <div>No data</div> : <div className={styles.instance_sub}>
                        <div className={styles.heading_sub}>{costData[1].data.type}</div>
                        <div className={styles.instance_details}>
                            <div>{costData[1].data.name}</div>
                            <div>{costData[2].data.name}</div>
                        </div>
                    </div>}
                </div>

                <div className={styles.network_wrapper}>
                    <div className={styles.heading}>Bandwidth</div>
                    {costData.map((card, index) => {
                        if(card.component === 'network'){
                            return (
                                <div className={styles.network_section} key={index}>
                                <span className={styles.bandwidth}>{card.data.bandwidth}GB</span>
                                <span className={styles.units}>/Month</span>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className={styles.storage_wrapper}>
                    <div className={styles.heading}>Storage</div>
                    {!storage ? <div>No data</div> : <div className={styles.storage_section}>
                        {
                            storage.map((data,index) => 
                                <StorageCard isdefault={false} review={true} data={data} key={index}  index={null}/>
                            )
                        }
                    </div>}
                </div>

                <div className={styles.security_wrapper}>
                    <div className={styles.heading}>Security</div>
                    {!security ? <div>No data</div> :<div className={styles.security_section}>
                        {
                            security.map((data,index) => 
                            <SecurityCard isExisting={true} sgname={data.name} card={data} key={index}/>
                            )
                        }
                    </div>}
                </div>
                </div>
                <div className={styles.button_wrapper}>
                    <button className={styles.cancel_button}>Canel</button>
                    <button className={styles.back_button} onClick={() => {navigate('/security')}}>Back</button>
                    <button className={styles.launch_button} onClick={successHandler}>Launch</button>
                </div>

            </div>}
        </>
    )
}

export default ReviewContainer