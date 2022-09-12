import { createContext } from "react";
import { useState } from "react";
import { VM_IMAGES } from "../../data/data";
export const MainContext = createContext({});


export const MainProvider = ({children}) => {
    const [images, setImages] = useState(VM_IMAGES[0].images);
    const [costData, setCostData] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);
    const [storageCards,setStorageCards] = useState([])
    const [network,setNetwork] = useState({})
    const [securityCards,setSecurityCards] = useState([])
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [updateData,setUpdateData] = useState({image:{},instance:[],storage:[],security:[]})

    const updateCostData = (data) => {
        // if(data.component === 'image'){
        //     setUpdateData((prev) => ({...prev,image:data}))
        // }
        // else if(data.component === 'instance'){
        //     let temp_arr = [...costData.instance,data]
        //     setUpdateData((prev) => ({...prev,instance:[...updateData.instance,data]}))
        // }
        // else if(data.component === 'storage'){
        //     setUpdateData((prev) => ({...prev,storage:[...data]}))
        // }
        // else if(data.component === 'security'){
        //     setUpdateData((prev) => ({...prev,security:[...data]}))
        // }
        setCostData(prev => [...prev,data])
        setTotalAmount(prev => (parseFloat(prev)+parseFloat(data.cost)).toString())
    }

    const updateIsAuthenticated = () => {
        setIsAuthenticated(true)
    }

    const updatenetwork = (value) => {
        setNetwork(value)
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
        updateIsAuthenticated,
        updatenetwork,
        network
    
    }}>{children}</MainContext.Provider>
}



