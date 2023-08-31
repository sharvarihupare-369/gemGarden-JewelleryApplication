
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const token = localStorage.getItem("user-token") ||  ""

export const PrivateRoute = ({children}) => {
  
    const location = useLocation()
    // console.log(location)
  return <>
    {token ? children : <Navigate state={location.pathname} replace={true} to="/login" />}
  </>
}
