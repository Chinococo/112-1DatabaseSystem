import { apiGetFavorite } from "../components/API"
import React from "react"
import storage from "store2"

export const useFavorite = () => {
  async function fetchFavorite(userId, callbackResult) {
    let storeActivities = []
    await apiGetFavorite(userId)
      .then(res => {
        storeActivities = JSON.parse(res.data[0].storeActivities);
      })
      .catch(err => console.log(err))
    callbackResult(storeActivities)
  }
  return { fetchFavorite }
}
