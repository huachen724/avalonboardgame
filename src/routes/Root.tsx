import React, { useState } from 'react'
import "./root.css"

function RootRoute() {
    let data = 
    {
        "users": [
            {
                "ID":"Ayon"
            },
            {
                "ID":"Hua",
            },
            {
                "ID":"Athens",
            },
            {
                "ID":"Jason",
            },
            {
                "ID":"Erick",
            }
        ]
    }
    return <p>{data.users.toString()}</p>
}

export default RootRoute