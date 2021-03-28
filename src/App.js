import { useEffect, useState } from 'react'
import {BrowserRouter , Switch , Route } from "react-router-dom"
import useStyles from "./Styles"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Auth from "./components/Auth/Auth"
import Error from "./components/Error/Error"
import Loader from "react-spinners/CircleLoader"
import Dashboard from './components/Dashboard/Dashboard'
import {auth , db} from "./firebase"
import Login from './components/Auth/Login'
import NewResource from "./components/NewResource/NewResource"
import ChatHome from "./components/ChatHome/ChatHome"
import Question from './components/Question/Question'

function App() {

  const classes = useStyles()
  const [loading,setLoading] = useState(false)
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [user,setUser] = useState(null)
  const [data,setData] = useState([])

  

  useEffect(() =>
    {
        const unsubscribe = auth.onAuthStateChanged((authUser) =>
        {
            if(authUser)
            {
                setUser(authUser)
            }
            else
            {
                setUser(null)
            }
        })
        return () =>
        {
            unsubscribe()
        }
    },[user,username])

  useEffect(() =>
  {
    setLoading(true)
    setTimeout(() =>
    {
      setLoading(false)
    },3000)
  },[])

  useEffect(() =>
    {
        db.collection("resources").onSnapshot(snapshot =>
            {
                setData(snapshot.docs.map(doc => doc.data()))
            })
    },[])
    

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <div className={classes.root}>
          {
          loading 
          ?
          <div className={classes.loader}>
          <Loader 
            size={100}
            color={"white"}
            loading={loading}
          />
          </div>
          :
          <>
          <Header/>
          <About/>
          </>
        }
        </div>
      </Route>
      <Route path="/auth" exact>
        <Auth username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail} user={user} setUser={setUser} auth={auth}/>
      </Route>
      <Route path="/signin" exact>
        <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail} user={user} setUser={setUser} auth={auth}/>
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard auth={auth} db={db} user={user} username={username} setUser={setUser} data={data} setData={setData} password={password}/>
      </Route>
      <Route path="/newresource" exact>
        <NewResource db={db}/>
      </Route>
      <Route path="/chat">
        <ChatHome db={db}/>
      </Route>
      <Route path="/question">
        <Question db={db} user={user} auth={auth}/>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
