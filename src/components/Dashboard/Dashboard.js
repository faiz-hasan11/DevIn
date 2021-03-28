import React  , {useEffect, useState} from 'react'
import {AppBar ,Button ,Paper , Grid, Toolbar , TextField} from "@material-ui/core"
import useStyles from "./Styles"
import {Link} from "react-router-dom"
import { MdPerson} from "react-icons/md"
// import data from "../../data/data"
import Card from "../Card/Card"
import { useHistory } from "react-router-dom"
import Loader from "react-spinners/CircleLoader"
import {ReactNavbar} from "react-responsive-animate-navbar"
import icon from "../../images/icon.svg"
function Dashboard({auth,db,user, setUser,username , data , setData }) {
    const classes = useStyles()
    const history = useHistory()
    const [searchValue,setSearchValue] = useState('')  
    const [resources,setResources] = useState(data)

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
        db.collection("resources").onSnapshot(snapshot =>
            {
                setData(snapshot.docs.map(doc => doc.data()))
            })
    },[])



const getResourceRequest = (searchValue) =>
  {
    if(searchValue==='')
    {
        db.collection("resources").onSnapshot(snapshot =>
            {
                setData(snapshot.docs.map(doc => doc.data()))
            })
      setResources(data)
    }
    else{
        const newResource = data.filter((res) => res.name.toLowerCase().includes(searchValue.toLowerCase()) )
        setResources(newResource)
    }
  }

    useEffect(() => {
        getResourceRequest(searchValue)
    }, [searchValue])

    


    const logout = () =>
    {
        auth.signOut()
        history.push("/")
    }

    return (
        <div className={classes.root}>
            {
                user ?
                (
                    <>
                    
                    <AppBar className={classes.appbar} elevation={0}>
                         <ReactNavbar
        color="rgb(25, 25, 25)"
        logo={icon}
        menu={[
          { name: <Link to="/question">Ask Question</Link>,to:<Link to="/question"/>},
          { name: <Link to="/chat">Chat Room</Link>,to:<Link to="/chat"/>},
          { name: <Link onClick={logout}>LogOut</Link>,to:<Link to="/"/>}
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/syed-faiz-hasan-3249071a9/",
            icon: ["fab", "linkedin-in"],
          }
        ]}
      />
                    </AppBar>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}> 
                    <center>
                        <div className={classes.input}>
                        <Paper>
                            <TextField placeholder="Enter To Search" className={classes.textfield} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                        </Paper>
                        <Link to="/newresource">       
                            <Button variant="outlined" color="#6b705c" style={{marginTop:"1rem"}}>Add New Resource</Button>
                        </Link>                 
                    </div>
                    </center>
                    <div className={classes.list}>
                        {
                            data.length > 0 ?
                            (
                                <Grid container spacing={4} className={classes.gridcontainer}>                                    
                                {
                                    resources.map((res,index)=>
                                    {
                                        return(
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card key={index} res={res}/>
                                            </Grid>
                                            )
                                    }
                                )
                                }
                                </Grid>
                            )
                            :
                            (<>
                                <h1 className={classes.titleCenter}>No result</h1>
                            </>
                            )
                        }
                    </div>
                    </div>
                </>)
                :
                (<div className={classes.loader}>
          <Loader 
            size={100}
            color={"white"}
            // loading={loading}
          />
          </div>)
            }
                
        </div>
    )
}

export default Dashboard
