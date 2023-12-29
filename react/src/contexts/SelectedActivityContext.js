import React from "react"

const SelectedActivityContext = React.createContext({
  activity: {},
  setActivity: obj => {},
})

export default SelectedActivityContext
