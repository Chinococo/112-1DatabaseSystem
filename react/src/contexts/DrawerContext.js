import React from "react"

const DrawerContext = React.createContext({
  drawerOpen: false,
  setDrawerOpen: open => {},
})

export default DrawerContext
