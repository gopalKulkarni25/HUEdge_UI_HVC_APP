import { useContext, useState } from 'react'
import { MainContext } from '../../context/ImageContext/MainContext'
import styles from './Dropdown.module.css'

const Dropdown = ({options}) => {
    const [toggleDropdown,setToggleDropdown] = useState(false);
    const {filterImageList} = useContext(MainContext);

    const showDropdown = () => {
        setToggleDropdown(!toggleDropdown)
    }

    const handleSelect = (option) => {
        filterImageList(option)
        showDropdown();
    }
    
    return <>
        <div className={styles.dropdown}>
            <input onClick={showDropdown}type='text' className={styles.textBox} placeholder='Region' readOnly/>
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