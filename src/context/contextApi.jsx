import { createContext, useEffect, useState } from "react";
import fetchDataFromApi from "../utils/api";
export const Context=createContext()

const AppContext=(props)=>{
    const[loading,setLoding]=useState(false)
    const[searchResults,setSearchResults]=useState(false)
    const[selectedCategory,setSelectedCategory]=useState("New")
    const[mobileMenu,setMobileMenu]=useState(false)

    useEffect(()=>{
        fetchCategoryDataApi(selectedCategory)
    },[selectedCategory])

    const fetchCategoryDataApi=(endpoint)=>{
        setLoding(true)
        fetchDataFromApi(`search/?q=${endpoint}`).then(({contents})=>{
            console.log(contents)
            setSearchResults(contents)
            setLoding(false)
        })
    }

    return(
        <Context.Provider value={
            {
                loading,setLoding,
                searchResults,setSearchResults,
                selectedCategory,setSelectedCategory,
                mobileMenu,setMobileMenu
            }
        }>
            {props.children}
        </Context.Provider>
    )
}
export default AppContext;