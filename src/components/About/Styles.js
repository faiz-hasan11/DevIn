import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        minHeight:"100vh",
        display:"flex",
        justifyContent:"flex-start",
        // alignItems:"center"
    },
    title:
    {
        "@media screen and (max-width: 860px)":
        {
            fontSize: "2rem",
            marginLeft:"0px",
            marginTop:"8rem"
        },
        fontSize: "5rem",
	    // textAlign: "center",
        writingMode: "vertical-rl",
        marginTop:"80px",
        marginLeft:"0px",
	    color: "#fcedd8",
	   	fontFamily: "'Niconne', cursive",
	    fontWeight: "700",
        textShadow: "5px 5px 0px #eb452b,10px 10px 0px #efa032,15px 15px 0px #46b59b,20px 20px 0px #017e7f,25px 25px 0px #052939,30px 30px 0px #c11a2b,35px 35px 0px #c11a2b,40px 40px 0px #c11a2b,45px 45px 0px #c11a2b"
    }
}))

export default useStyles;