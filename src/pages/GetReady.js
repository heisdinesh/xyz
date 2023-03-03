import React from 'react'

function GetReady() {

    const seconds = 5;
    (()=>{
        setTimeout(()=>{seconds=seconds-1},60)
        console.log(seconds)
    })()
  return (
    <div>{seconds}</div>
  )
}

export default GetReady