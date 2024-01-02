import axios from "axios"

//lineOauth
const lineOauth2Request = axios.create({
  baseURL: "https://api.line.me/oauth2/v2.1/",
  timeout: 5000,
})

//serverAuth
const auth = axios.create({
  //baseURL: 'https://api.metapoly.game/auth/',
  baseURL: import.meta.env.VITE_BACKEND + "/auth/",
  timeout: 5000,
})

//acticity
const acticityRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/activity/',
  baseURL: import.meta.env.VITE_BACKEND + "/activity/",
  timeout: 5000,
})

//member
const memberRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/member/',
  baseURL: import.meta.env.VITE_BACKEND + "/member/",
  timeout: 5000,
})

//task
const taskRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/task/',
  baseURL: import.meta.env.VITE_BACKEND + "/task/",
  timeout: 5000,
})

//memberTask
const memberTaskRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/memberTask/',
  baseURL: import.meta.env.VITE_BACKEND + "/memberTask/",
  timeout: 5000,
})

//memberActivityCode
const memberActivityCodeRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/memberActivityCode/',
  baseURL: import.meta.env.VITE_BACKEND + "/memberActivityCode/",
  timeout: 5000,
})
//nfts
const nftAccountRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/nft/account/',
  baseURL: import.meta.env.VITE_BACKEND + "/nft/account/",
  timeout: 5000,
})

const nftRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/nft/account/',
  baseURL: import.meta.env.VITE_BACKEND + "/nft/",
  timeout: 5000,
})

//nfts
const nftsRequest = axios.create({
  //baseURL: 'https://api.metapoly.game/nfts/',
  baseURL: import.meta.env.VITE_BACKEND + "/nfts/",
  timeout: 5000,
})
//memberCustomSetting
const memberSettingRequsest = axios.create({
  //baseURL: 'https://api.metapoly.game/nft/account/',
  baseURL: import.meta.env.VITE_BACKEND + "/memberCustomerSetting/",
  timeout: 5000,
})

//
const memberNFTCouponRequsest = axios.create({
  //baseURL: 'https://api.metapoly.game/memberNFTCoupon/',
  baseURL: import.meta.env.VITE_BACKEND + "/memberNFTCoupon/",
  timeout: 5000,
})
//lineOauth
export const apiLineOauth2 = (data, config) => lineOauth2Request.post("token", data, config)
//serverAuth
export const apiAuthLogin = (data, config) => auth.post("login", data, config)
//acticity
export const apiActicityList = () => acticityRequest.get("list")
export const apiGetActivity = activityId => acticityRequest.get(`view?activityId=${activityId}`)
//member
export const apiMemberCreate = (data, config) => memberRequest.post("create", data, config)
export const apiMemberEdit = (memberId, data, config) => memberRequest.put(`edit?memberId=${memberId}`, data, config)
export const apiGetMember = memberId => memberRequest.get(`view?memberId=${memberId}`)
//task
export const apiTaskList = () => taskRequest.get("list")
export const apiTaskView = taskId => taskRequest.get(`view?taskId=${taskId}`)
//memberTask
export const apiMemberTaskCreate = (data, config) => memberTaskRequest.post("create", data, config)
export const apiMemberTaskList = (memberId, activityId) =>
  memberTaskRequest.get(`view?memberId=${memberId}&activityId=${activityId}`)
//memberActivityCode
export const apiMemberActivityCodeList = () => memberActivityCodeRequest.get("list")
export const apiMemberActivityCodeView = memberId => memberActivityCodeRequest.get(`view?memberId=${memberId}`) //backend not work
export const apiMemberActivityCodeCreate = (data, config) => memberActivityCodeRequest.post("create", data, config)
//nfts
export const apiNfts = solAccount_pubkey =>
  nftAccountRequest.get(`ownlist?solAccount_pubkey=${solAccount_pubkey}&chainUrl=https://api.devnet.solana.com`)
export const apiNftsByActivityId = (solAccount_pubkey, activityId) =>
  nftAccountRequest.get(`ownlistByActivityId?solAccount_pubkey=${solAccount_pubkey}&activityId=${activityId}`)
export const apiNftGetByMemberId = memberId => nftRequest.get(`list?memberId=${memberId}`)
export const apiNftList = () => nftsRequest.get(`list`)
export const apiNftView = nftsId => nftsRequest.get(`view?nftsId=${nftsId}`)

  //memberCustomSetting
export const apiAddFavorite = (memberId, data, config) =>
  memberSettingRequsest.put(`edit?memberId=${memberId}`, data, config)
export const apiGetFavorite = memberId => memberSettingRequsest.get(`view?memberId=${memberId}`)
export const apiGetAllSetting = () => memberSettingRequsest.get(`list`)

//memberNFTCoupon
export const apiMemberNFTCouponCreate = (data,config) => memberNFTCouponRequsest.post(`create`,data,config)
export const apiMemberNFTCouponList = () => memberNFTCouponRequsest.get(`list`)