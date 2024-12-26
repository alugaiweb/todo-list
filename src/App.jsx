import ToDoForm from "./components/ToDoForm"
import Task from "./components/Task"
import Header from "./components/Header"
import React, { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: Math.floor(Math.random() * 10000),
      title: "Ano Novo...",
      category: "Casa",
      timeTerm: "00:00",
      dateTerm: "01/01/2025",
      isComplete: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString('pt-br', {hour: '2-digit', minute:'2-digit'})
    }
  ])

  const addTask = (title, category, timeTerm, dateTerm) => {
    const newTasks = [...tasks, {
      id: Math.floor(Math.random() * 10000),
      title,
      category,
      timeTerm,
      dateTerm: new Date(dateTerm).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
      isComplete: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString('pt-br', {hour: '2-digit', minute:'2-digit'}) 
    }]
    setTasks(newTasks)
  }

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task))
  }

  const renderTasks = (isComplete) => (
    tasks.filter(task => task.isComplete === isComplete).map(task => (
      <Task 
        key={task.id}
        {...task}
        isComplete={task.isComplete} 
        completeTask={completeTask}
        deleteTask={deleteTask} 
      />
    ))
  )

  const countTasks = (isComplete) => tasks.filter(task => task.isComplete === isComplete).length

  const deleteTask = (id) => {
    const newTasks = [...tasks]
    const filteredTasks = newTasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="bg-gray-50 w-screen h-screen overflow-x-hidden">
      <Header />
      <ToDoForm addTask={addTask} />
      <div>
        <h1 className="text-center text-lg font-semibold">Tarefas Pendentes ({countTasks(false)})</h1>
        {renderTasks(false)}
        <h1 className="text-center text-lg font-semibold mt-8">Tarefas Concluídas ({countTasks(true)})</h1>
        {renderTasks(true)}
      </div>
    </div>
  )
}

export default App
