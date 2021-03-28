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
    form:
    {
        width:"100",
        marginTop:"7rem",
        marginBottom:"4rem"
    },
    title:
    {
        flexGrow:"1",
        color:"#6b705c",
        fontFamily:"'Train One', cursive"
    },
    wrapper:
    {
        width:"80%",
        margin:"0 auto"
    },
        about:
    {
        display:"flex",
        flexDirection:"row",
        marginRight:"2rem",
        fontSize:"15px",
        alignItems:"center",
        justifyContent:"center",
        "&:hover":
        {
            color:"#6b705c",
            cursor:"pointer"
        }
    },
}))

export default useStyles;