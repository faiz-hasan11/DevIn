import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    },
    icon:
    {
        color:"#fff",
        fontSize:"2rem"
    },
    title:
    {
        flexGrow:"1",
        color:"#6b705c",
        fontFamily:"'Train One', cursive",
        marginLeft:"0px"
    },
    wrapper:
    {
        width:"80%",
        margin:"0 auto"
    },
    about:
    {
        marginRight:"2rem",
        fontSize:"20px",
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
        textDecoration: "#6b705c double underline 5px",
        textShadow: "#ffe8d6 1px 0 10px",
        transition: "transform 1s",
        "&:hover":
        {
            transform: "scale(1.3) skewX(15deg)",
            cursor:"pointer"
        }

    },
    container:
    {
        textAlign:"center"
    },
}))

export default useStyles;