import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor: '#203040',
        '& a':{   // 'single quotation mark with & for child'
            color: '#fff', 
            marginLeft: 10,
        },
    },
    main:{
        minHeight:'80vh',
    },
    footer:{
       textAlign:'center',
    }
});

export default useStyles;