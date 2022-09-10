import InstanceType from '../InstanceType/InstanceType'
import styles from './InstanceContainer.module.css'
import { INSTANCE_ARR } from '../../data/instanceData'
import { useEffect, useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { MainContext } from '../../context/ImageContext/MainContext'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'

const InstanceContainer = (props) => {
    const [selected, setSelected] = useState(1)

    const [filterCPU,setFIlterCPU] = useState([])
    const [filterMem,setFIlterMem] = useState([])

    const [selectedCPUInstance,setSelectedCPUInstance] = useState({name:'',type:''})
    const [selectedMemInstance,setSelectedMemInstance] = useState({name:'',type:''})

    const [validationerr,setValidationErr] = useState({isValid:true,message:''});

    const [value,setvalue] = useState('');

    const [cpuCost,setCpuCost] = useState('')
    const [memCost,setMemCost] = useState('')

    const navigate = useNavigate()

    const selectHandler = (id) => {
        setSelected(id)
    }

    const {updateCostData} = useContext(MainContext)

    const handleChange = (val) => {
        setvalue(val);
        let costvalue= ''
        if(val.includes('Core')){
            setSelectedCPUInstance({name:val,type:INSTANCE_ARR.filter(el => el.id=== selected)[0].name})
            costvalue = (parseFloat(val.replace( /^\D+/g, ''))*3).toString()
            setCpuCost(costvalue)
        }
        if(val.includes('MB') || val.includes('GB')){
            setSelectedMemInstance({name:val,type:INSTANCE_ARR.filter(el => el.id=== selected)[0].name})
            setMemCost((parseInt(val.replace( /^\D+/g, ''))*1).toString())
            if(val.includes('256')){
                costvalue = (parseFloat(val.replace( /^\D+/g, ''))/4).toString()
            }
            else if(val.includes('512')){
                costvalue = (parseFloat(val.replace( /^\D+/g, ''))/2).toString()
            }
            else{
                costvalue = (parseFloat(val.replace( /^\D+/g, ''))*1).toString()
            }
            setMemCost(costvalue)
        }
        
    }

    const submitHandler = () => {
        console.log(cpuCost,memCost)
        if(value!== ''){
            if(selectedCPUInstance.name !==''){
                updateCostData({
                    name:`CPU - ${selectedCPUInstance.name}`,
                    data:{
                        name:`CPU - ${selectedCPUInstance.name}`,
                        type:selectedCPUInstance.type,
                        cost:cpuCost
                    },
                    cost:cpuCost,
                    component:'instance'
                })
            }
            setValidationErr({isValid:true,message:''});
                if(selectedMemInstance.name !==''){
                updateCostData({
                    name:`Memory - ${selectedMemInstance.name}`,
                    data:{
                        name:`Memory - ${selectedMemInstance.name}`,
                        type:selectedMemInstance.type,
                        cost:memCost
                    },
                    cost:memCost,
                    component:'instance'
                })}
                navigate('/third')
        }
        else{

            setValidationErr({isValid:false,message:'Please select instance coniguration'});
        }
        console.log(selectedCPUInstance)
        console.log(selectedMemInstance)
    }

    //on load of the page
    useEffect(() => {
        INSTANCE_ARR.forEach((el) => {
            if(el.id === 1){
                setFIlterCPU(el.cpu)
                setFIlterMem(el.memory)
            }
        })
    },[])

    useEffect(() => {
        INSTANCE_ARR.forEach((el) => {
            if(el.id === selected){
                setFIlterCPU(el.cpu)
                setFIlterMem(el.memory)
            }
        })
    },[selected])

    return (
        <>
            <div className={styles.main}>
                <div className={styles.card_container}>
                {
                    INSTANCE_ARR.map((instance,index) => 
                        <InstanceType onSelected={selectHandler} selected={selected} name={instance.name} key={index} id={instance.id}/>
                    )
                }
                </div>
                
                <div className={styles.drop_downs}>
                    <div className={styles.heading}>
                        Create Configuration
                    </div>
                    {!validationerr.isValid && <div className={styles.error}>{validationerr.message}</div>}
                    <div className={styles.drop_down_pairs}>
                        <div className={styles.drop_cpu}>
                            <Dropdown onSelect={handleChange} options={filterCPU} parentName="instance" placeholder='CPU Cores'/>
                        </div>
                        <div className={styles.drop_memory}>
                        <Dropdown onSelect={handleChange} options={filterMem} parentName="instance" placeholder='Memory'/>
                        </div>
                    </div>

                </div>
                <div className={styles.button_wrapper}>
                    <button className={styles.back_button}>Back</button>
                    <button className={styles.proceed_button} onClick={submitHandler}>Proceed</button>
                </div>
            </div>

        </>
    )
}

export default InstanceContainer