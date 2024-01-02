import React from "react"

const MemberContext = React.createContext({
  member: { line_userId: "", line_displayName: "", line_pictureUrl: "" },
  setMember: list => {},
})

export default MemberContext
