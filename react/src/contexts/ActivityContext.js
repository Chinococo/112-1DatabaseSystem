import React from "react"

const ActivityContext = React.createContext({
  activityList: [],
  setActivityList: list => {},
})

export default ActivityContext
