import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#cb997e",
        minHeight:"100vh" 
    },
    box:
    {
        width:"75%",
        
    },
    form:
    {
        width:"100",
        marginBottom:"0px"
    },
    messages:
    {
        backgroundColor:"white",
        height: "500px",
        overflow: "auto",
        border:"3px solid black"
    },
    title:
    {
        margin:"15px",
        fontSize:"2rem",
        color:"#f8edeb",
        textDecoration: "#6b705c underline 5px",
        textShadow: "#ffe8d6 1px 0 10px",
    },
    btn:
    {
        fontSize:"10px",
        height:"40px",
        float:"right",
        marginLeft:"40px",
        marginTop:"15px"
    }
}))

export default useStyles;