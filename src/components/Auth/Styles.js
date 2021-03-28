import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        backgroundColor:"#cb997e"
    },
    paper:
    {
        display:"flex",
        flexDirection:"column",
        width:"20rem",
        alignItems:"center",
        justifyContent:"center",
        height:"20rem",
        backgroundColor:"#a5a58d"
    },
    grid:
    {
        justifyContent:"center",
        margin:"0.5rem",
        backgroundColor:"#ffe8d6",
        width:"22rem"
    },
    title:
    {
        fontSize:"3rem",
        marginBottom:"4rem",
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
}))

export default useStyles;