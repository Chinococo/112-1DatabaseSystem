import React from "react"

const TaskContext = React.createContext({
  tasks: [],
  setTasks: i => {},
  allTasks: [],
  setAllTasks: i => {},
})

export default TaskContext
