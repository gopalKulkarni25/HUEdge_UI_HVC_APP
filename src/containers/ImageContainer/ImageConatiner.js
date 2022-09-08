import ImageCard from '../../components/ImageCard/ImageCard'
import styles from './ImageContainer.module.css'
import { useContext } from 'react'
import { MainContext } from '../../context/ImageContext/MainContext'

const ImageContainer = (props) => {
    const {images} = useContext(MainContext)
    return (
        <>
            <div className={styles.main}>
                {images.map((image,index) => 
                    <ImageCard name={image.name} key={index} desc={image.description} radios={image.arhitectures}/>
                )}
            </div>
        </>
    )
}

export default ImageContainer