
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'



export const PrivateRoute = ({children}) => {
    const {token} = useSelector(store => store.authReducer)
    const location = useLocation()
    // console.log(location)
  return <>
    {token ? children : <Navigate state={location.pathname} replace={true} to="/login" />}
  </>
}
