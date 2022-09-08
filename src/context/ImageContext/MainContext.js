import { createContext } from "react";
import { useState } from "react";
import { VM_IMAGES } from "../../data/data";
export const MainContext = createContext({});


export const MainProvider = ({children}) => {
    const [images, setImages] = useState(VM_IMAGES[0].images);
    const [costData, setCostData] = useState([])

    const updateCostData = (data) => {
        setCostData([...costData,data])
    }

    const filterImageList = (region) => {
        console.log(region)
        let filtered_arr = VM_IMAGES.filter((element) => element.region === region)
        setImages(filtered_arr[0].images)
    }
    

    return <MainContext.Provider value={{
        images,
        costData,
        filterImageList,
        updateCostData
    
    }}>{children}</MainContext.Provider>
}



