import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/ImageContext/MainContext'
import styles from './Dropdown.module.css'
import { ReactComponent as Arrowsvg } from '../../assets/Vector.svg';
const Dropdown = ({options, parentName, placeholder, onSelect}) => {
    const [toggleDropdown,setToggleDropdown] = useState(false);
    const {filterImageList} = useContext(MainContext);
    const [selectedval,setSelectedVal] = useState('')

    useEffect(() => {
        setSelectedVal('')
    },[options])

    const showDropdown = () => {
        setToggleDropdown(!toggleDropdown)
    }

    const handleSelect = (option) => {
        setSelectedVal(option)
        if(parentName === 'navContainer'){
            filterImageList(option)
        }
        onSelect(option)
        showDropdown();
    }
    
    return <>
        <div className={styles.dropdown}>
            <div className={styles.main_wrapper}>
                <input onClick={showDropdown}type='text' className={styles.textBox} placeholder={selectedval.length>0 ? selectedval : placeholder} readOnly/>
                <div className={styles.arrow}>
                    <Arrowsvg/>
                </div>
            </div>
            {toggleDropdown && <div className={styles.option}>
                {options && options.map((option,index) => 
                        <div type="text" value={option} key={index} onClick={() => handleSelect(option)} readOnly><span>{option}</span></div>
                    )
                }
            </div>}
        </div>

    </>
}

export default Dropdown;