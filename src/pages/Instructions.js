import React from 'react'
import avatar from "../dev_data/avatar.png"
function Instructions() {
    const nickname ="dinesh";
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <img src={avatar} alt="avatar" className="w-32 h-32 rounded-md border-zinc-200" />
                <p className="text-xl font-semibold text-slate-300 mt-2">{nickname}</p>
            </div>
            <h2 className="text-md font-medium text-slate-300 mt-2 max-w-md">
                You'r in, see your nickname on the screen</h2>
           
        </div>
    </div>
  )
}

export default Instructions