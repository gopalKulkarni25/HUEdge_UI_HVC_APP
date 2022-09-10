
import ImageCard from '../../components/ImageCard/ImageCard'
import styles from './ReviewContainer.module.css'

const ReviewContainer = (props) => {
    return (
        <>
            <div className={styles.main_wrapper}>
                <div className={styles.generate_btn}>
                    <button>Generate JSON</button>
                </div>

                <div className={styles.image_wrapper}>
                    {/* <ImageCard/> */}
                </div>
            </div>
        </>
    )
}

export default ReviewContainer