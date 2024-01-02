import { apiMemberActivityCodeList } from "../components/API"
import React from "react"

export const useMemberActivityCode = () => {
  /**
   * Fetch memberActivityCode list.
   * @param {function} callbackResult set memberActivityCodeList result to your callbackResult function
   * @param {String} targetMemberId input your memberId (e.g. line_userId)
   */
  async function fetchMemberActivityCode(targetMemberId, callbackResult) {
    try {
      const memberActivityCodeList = await apiMemberActivityCodeList()
      const filtedMemberActivityCodeList = memberActivityCodeList.data.filter(obj => {
        return obj.memberId == targetMemberId
      })
      callbackResult(filtedMemberActivityCodeList)
      console.log("filtedMemberActivityCodeList: ", filtedMemberActivityCodeList)
    } catch (error) {
      console.log("fetchMemberActivityCode FAILED: ", error)
    }
  }

  return { fetchMemberActivityCode }
}
