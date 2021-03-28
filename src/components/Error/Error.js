import React from 'react'
import {Link} from "react-router-dom"
import useStyles from "./Styles"
import {Button} from "@material-ui/core"
import "./Styles.scss"
function Error() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <section className={classes.errorPage}>
                <div className={classes.errorContainer}>
                    <div className="face">
	                    <div className="band">
		                    <div className="red"></div>
		                    <div className="white"></div>
		                    <div className="blue"></div>
	                    </div>
	                    <div className="eyes"></div>
	                    <div className="dimples"></div>
	                    <div className="mouth"></div>
                    </div>

            <h1>Oops! Its a Dead End!</h1>
            <Link to="/">
                <Button variant="outlined" color="#6b705c">
                            Back Home
                </Button>
            </Link>
            </div>
        </section>
        </div>
        
    )
}

export default Error
