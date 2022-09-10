import styles from './SecurityCard.module.css'
import Dropdown from '../Dropdown/Dropdown'
import { useEffect, useState, useRef, useContext } from 'react'
import { MainContext } from '../../context/ImageContext/MainContext'

const OPTIONS = [
    "HTTPS", "SSH", "SMTP"
]



const SecurityCard = ({isExisting,card, updated,sgname}) => {
    const [existingDetail,setExistingDetail] = useState({});
    const [type,setType] = useState('');
    const protocol = useRef('');
    const port = useRef('');
    const source = useRef('');
    const desc = useRef('');
    const {addSecurityCards} = useContext(MainContext)
    useEffect(() => {
        if(isExisting){
            setExistingDetail(card)
            setType(card.type);
            protocol.current.value = card.protocol;
            port.current.value = card.port;
            source.current.value = card.source;
        }

    },[])

    useEffect(() => {
        if(updated !== 0){
        console.log('updating ',updated)
        if(type !=='' && protocol.current.value !== '' &&  port.current.value !=='',source.current.value){
            if(isExisting){
                addSecurityCards({
                    name: sgname,
                    type:card.type,
                    protocol: card.protocol,
                    port:card.port,
                    source:card.source,
                    description: card.desc 
                    })
            }
            else{
            addSecurityCards({
                    name:sgname,
                    type:type,
                    protocol: protocol.current.value,
                    port:port.current.value,
                    source:source.current.value,
                    description: desc.current.value 
                    })
            }
        }}
    },[updated])

    const handleChange = (val) => {
        setType(val)
    }
    
    return(
        <>
       {console.log(card)}
            <div className={styles.main_wrapper}>
                <div>
                    <p>Type</p>
                    <div className={styles.type} style={{ pointerEvents: isExisting ? 'none' : 'auto' }}>
                        <Dropdown options={OPTIONS} parentName='security' onSelect={handleChange} placeholder={isExisting ? card.type: 'type'} width='148px' height='32px' arrowheight='6px'/>
                    </div>
                </div>
                <div>
                    <p>Protocol</p>
                    <div className={styles.text_area} ref={protocol} style={{ pointerEvents: isExisting ? 'none' : 'auto' }}>
                        <input type="text" placeholder='TCP' ref={protocol}/>
                    </div>
                </div>
                <div>
                    <p>Port Range</p>
                    <div className={styles.text_area} style={{ pointerEvents: isExisting ? 'none' : 'auto' }}>
                        <input type="text" placeholder='443' ref={port}/>
                    </div>
                </div>
                <div>
                    <p>Source</p>
                    <div className={styles.text_area} style={{ pointerEvents: isExisting ? 'none' : 'auto' }}>
                        <input type="text" ref={source}/>
                    </div>
                </div>
                <div>
                    <p>Description</p>
                    <div className={styles.text_area} style={{ pointerEvents: isExisting ? 'none' : 'auto' }} >
                        <input type="text" placeholder='some remarks' ref={desc}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityCard