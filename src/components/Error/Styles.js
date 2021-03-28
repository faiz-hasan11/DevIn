import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        backgroundColor:"#cb997e" 
    },
    errorPage:
    {
        display:"flex",
        justifyContent:"center"
    },
    errorContainer:
    {
        textAlign: "center",
        textTransform: "capitalize"
    }
}))

export default useStyles;
