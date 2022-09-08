import NavItem from '../../components/NavItem/NavItem'

import styles from './NavContainer.module.css'

import Dropdown from '../Dropdown/Dropdown'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_ARR = [
    {
        name: "1.choose image",
        link: "/first"
    },
    {
        name: "2.choose instance type",
        link: "/second"
    },
    {
        name: "3.Storage and network",
        link: "/third"
    },
    {
        name: "4.Configure security",
        link: "/fourth"
    },
    {
        name: "5.Review & Launch",
        link: "/five"
    },

]

const NavContainer = (props) => {
    
    const DROP_ARR = ["US-East-1","Asia Pacific-Mumbai","US-West-1"]
    const [navHeader, setNavHeader] = useState('choose image')
    const currentPath = useLocation()

    useEffect(() => {
        NAV_ARR.forEach((element) => {
            if(element.link === currentPath.pathname){
                // console.log(element.link)
                setNavHeader(prev => element.name.slice(2,))
            }
        })
    },[currentPath])

    

    return <>
            <div className={styles.nav_container_main}>
                <div className={styles.nav_content_left}>
                    <div className={styles.nav_text}>
                        {navHeader}
                    </div>
                    <div className={styles.nav_list}>
                        {NAV_ARR.map((item,index) => 
                            <NavItem itemname={item.name} link={item.link} key={index}/>
                        )}
                    </div>
                </div>
                <div className={styles.nav_content_right}>
                    <Dropdown options={DROP_ARR}/>
                </div>
            </div>
        </>
}

export default NavContainer