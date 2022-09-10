import { createContext } from "react";
import { useState } from "react";
import { VM_IMAGES } from "../../data/data";
export const MainContext = createContext({});


export const MainProvider = ({children}) => {
    const [images, setImages] = useState(VM_IMAGES[0].images);
    const [costData, setCostData] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);
    const [storageCards,setStorageCards] = useState([])
    const [securityCards,setSecurityCards] = useState([])
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    const updateCostData = (data) => {
        // if(data.component === 'image'){
        //     setCostData((prev) => ({...prev,image:data}))
        // }
        // else if(data.component === 'instance'){
        //     let temp_arr = [...costData.instance,data]
        //     setCostData((prev) => ({...prev,instance:[...costData.instance,data]}))
        // }
        // else if(data.component === 'storage'){
        //     setCostData((prev) => ({...prev,storage:[...data]}))
        // }
        // else if(data.component === 'security'){
        //     setCostData((prev) => ({...prev,security:[...data]}))
        // }
        setCostData(prev => [...prev,data])
        setTotalAmount(prev => (parseInt(prev)+parseInt(data.cost)).toString())
    }

    const updateIsAuthenticated = () => {
        setIsAuthenticated(true)
    }

    const filterImageList = (region) => {
        console.log(region)
        let filtered_arr = VM_IMAGES.filter((element) => element.region === region)
        setImages(filtered_arr[0].images)
    }

    const addStorageCards = (storage) => {
        console.log(storage)
        setStorageCards(prev => [...prev,storage])
    }

    const addSecurityCards = (security) => {
        console.log(security)
        setSecurityCards(prev => [...prev,security])
    }

    

    return <MainContext.Provider value={{
        images,
        costData,
        filterImageList,
        updateCostData,
        totalAmount,
        addStorageCards,
        storageCards,
        addSecurityCards,
        securityCards,
        isAuthenticated,
        updateIsAuthenticated
    
    }}>{children}</MainContext.Provider>
}



