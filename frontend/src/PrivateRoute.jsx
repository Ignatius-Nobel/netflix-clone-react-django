import { Navigate } from "react-router-dom"
import { useState,useEffect } from "react"

const PrivateRoute = ({children}) => {

    const token = localStorage.getItem("accessToken")
    return token ? children : (<Navigate  to='/login'/> )     
}

export default PrivateRoute
