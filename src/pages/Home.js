import React from 'react'
import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"

function Home() {
    const [pin,setPin] =useState('')
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`ur pin is ${pin}`)
        if(5<6){
            navigate("/join")
        }
    }
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl text-slate-100 font-semibold">Peeps</h2>
            <form className="mt-6 bg-slate-100 h-32 w-72 flex flex-col justify-evenly items-center rounded-md
            font-medium"
            onSubmit={handleSubmit}>
                <input className="border-4 rounded-md w-64 h-12"
                type="text"
                value={pin}
                placeholder="Game Pin"
                onChange={(e)=>{setPin(e.target.value)}} />
                <input className=" rounded-md bg-slate-900 text-zinc-300 w-64 h-12"
                type="submit" />
            </form>
        </div>
        <div className=" fixed bottom-10">
            <h2 className="text-slate-200">Create your own peeps for free at <Link to="/login" className="font-bold">Peeps</Link></h2>
        </div>
    </div>
  )
}

export default Home