import React , {useState, useEffect} from 'react'
import {AppBar ,Button ,Collapse , IconButton, Toolbar} from "@material-ui/core"
import useStyles from "./Styles"
import { Link as Scroll } from "react-scroll"
import {Link} from "react-router-dom"
import {ReactNavbar} from "react-responsive-animate-navbar"
import icon from "../../images/icon.svg"
function Header() {
    const classes = useStyles()
    const [checked,setChecked] = useState(false)

    useEffect(() =>
    {
        setChecked(true)
    },[])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <ReactNavbar
        color="rgb(25, 25, 25)"
        logo={icon}
        menu={[
          { name: <Link to="/">Home</Link>,to:<Link to="/"/>},
          { name: <Link to="/auth">Create Account</Link>,to:<Link to="/auth"/>},
          { name: <Link to="/signin">Login</Link>,to:<Link to="/auth"/>},
          { name: <Scroll to="about" smooth={true}>
                        About
                    </Scroll>,to:<Link to="/auth"/> }
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
            
            <Collapse in={checked} {...(checked ? { timeout:4000 } : {} )}>
            <div className={classes.container} id="home">
                <h1 className={classes.titleCenter}>Welcome To DevIn</h1>
                <h2 style={{fontFamily:"'Syne Mono', monospace"}}>WE AIM TO PRESENT A PLATFORM TO GUIDE THE DEVELOPERS TO THE RIGHT PATH OF SKILL DEVELOPMENT.</h2>
                <IconButton>
                    <Link to="/auth">
                    <Button variant="outlined" color="#6b705c">
                            Lets Explore
                    </Button>
                    </Link>
                </IconButton>
            </div> 
            </Collapse>           
        </div>
    )
}

export default Header
