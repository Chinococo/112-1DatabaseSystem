import React from "react"

const FavoriteContext = React.createContext({
  favoriteList: [],
  setFavoriteList: list => {},
})

export default FavoriteContext
