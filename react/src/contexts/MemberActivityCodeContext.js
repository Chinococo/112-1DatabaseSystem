import React from "react"

const MemberActivityCodeContext = React.createContext({
  memberActivityCodeList: [],
  setMemberActivityCodeList: list => {},
})

export default MemberActivityCodeContext
