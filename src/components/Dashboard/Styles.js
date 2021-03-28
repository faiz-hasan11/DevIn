import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        display:"flex",
        justifyContent:"center",
        // alignItems:"center",
        height:"100%",
        minHeight:"100vh",
        backgroundColor:"#cb997e" 
    },
    // appbar:{
    //     backgroundColor:"#ddbea9",
    //     height:"5rem",
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center"
    // },
    icon:
    {
        color:"#fff",
        fontSize:"2rem"
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
    button:
    {
        backgroundColor:"#6b705c",
        borderRadius:"20%"
    },
    titleCenter:
    {
        fontSize:"5rem",
        color:"#f8edeb",
        textShadow: "#ffe8d6 1px 0 10px",

    },
    container:
    {
        textAlign:"center"
    },
    input:
    {
        marginTop:"10rem",
        width:"50rem",
        // marginLeft:"8rem",
        textAlign:"center",
        justifyContent:"center",
        "@media (max-width:780px)":
        {
            width:"30rem"
        }
    },
    textfield:
    {
        width:"100%",
        
    },
    list:
    {
        marginTop:"5rem",
        marginBottom:"0px"
    },
    gridcontainer:
    {
        padding:"20px",
        marginBottom:"20px"
    },
    loader:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }
}))

export default useStyles;