

import styles from './InstanceType.module.css'

const InstanceType = ({name, id,onSelected,selected}) => {
    

    return (
        <>
            <div className={selected === id ? styles.main_container_selected : styles.main_container_not_selected} onClick={() => onSelected(id)}>
                <span>{name}</span>
            </div>
        </>
    )
}

export default InstanceType