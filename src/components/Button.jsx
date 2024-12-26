import React from 'react'

const Button = ({ id, action, icon, text, type, deleteTask, completeTask, isComplete }) => {

  return (
    <button type={type} action={action} onClick={action === "complete" ? () => completeTask(id) : action === "delete" ? () => deleteTask(id) : null}
    className={`p-2 text-sm font-semibold rounded flex items-center gap-1 
    ${type === "submit" ? `bg-violet-700 text-zinc-50 hover:bg-violet-800 duration-200 max-md:col-span-1` 
    : isComplete && action === "delete" ? `bg-red-600 text-zinc-50 hover:bg-red-700 duration-200`
    : !isComplete && action === "delete" ? `hidden`
    : isComplete ? `hidden`
    : `bg-emerald-600 text-zinc-50 hover:bg-emerald-700 duration-200`}`}>
      {window.innerWidth <= 450 && type === "button" ? icon : <>{icon}{text}</>}
    </button>
  )
}

export default Button