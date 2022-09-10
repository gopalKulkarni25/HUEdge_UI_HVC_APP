import styles from './SuccessModel.module.css'

const SuccessModel = (props) => {
    return(
        <>
            <div className={styles.model_wrapper}>
                <div className={styles.heading}>
                    Success
                    <div className={styles.cancel_btn} onClick={() => {window.location.reload()}}>X</div>
                </div>
                <div className={styles.content}>
                    VM(s) Created with provided configurations successfully!

                </div>
            </div>
        </>
    )
}

export default SuccessModel