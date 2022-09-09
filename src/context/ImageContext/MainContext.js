import { createContext } from "react";
import { useState } from "react";
import { VM_IMAGES } from "../../data/data";
export const MainContext = createContext({});


export const MainProvider = ({children}) => {
    const [images, setImages] = useState(VM_IMAGES[0].images);
    const [costData, setCostData] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);

    const updateCostData = (data) => {
        setCostData((prev) => [...prev,data])
        setTotalAmount(prev => (parseInt(prev)+parseInt(data.cost)).toString())
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
        updateCostData,
        totalAmount
        
    
    }}>{children}</MainContext.Provider>
}



