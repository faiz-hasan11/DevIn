import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    "@global":{
        "*::-webkit-scrollbar" :{
    display: "none"
    }
    },
    root:{
        minHeight: "100vh",
        backgroundColor:"#cb997e"        
    },
    loader:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }
    
}))

export default useStyles;