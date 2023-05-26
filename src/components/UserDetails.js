import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    
    const {userId} = useParams()
    // const params = useParams() //return function with key-value pairs dynamically depending upon current route
    // const userId = params.userId
    return (
        <div>Details about user {userId}</div>
    )
}
