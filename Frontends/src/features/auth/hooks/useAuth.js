import {register,login,logout,getMe} from "../services/auth.api"
import { AuthContext } from "../auth.context"
import { useContext, useEffect } from "react"


export const useAuth = ()=>{

  const context = useContext(AuthContext)
  const {user,setUser,loading, setLoading }= context

  async function handleRegister({email,username, password }) {

    setLoading(true)
    const data = await register({email,username, password })
    setUser(data.user)
    setLoading(false)
  }

  async function handleLogin({email,username,password}){

    setLoading(true)
    const data = await login({email,username,password})
    setUser(data.user)
    setLoading(false)
  }

async function handleGetMe(){

  setLoading(true)
  const data = await getMe()
  setUser(data.user)
  setLoading(false)
}

async function handleLogout(){
  setLoading(true)
  await logout()
  setUser(null)
  setLoading(false)
}

useEffect(()=>{
  handleGetMe()
},[])


return ({
  user,
  loading,
  register: handleRegister,
  login: handleLogin,
  getMe: handleGetMe,
  logout: handleLogout
})

  }

