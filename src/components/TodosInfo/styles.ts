import { buttonBaseClasses, listItemClasses } from "@mui/material";

export const styles = {
    infoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '12px',
    },
    counterCompleted: {
        flexShrink: 0,
        color: 'grey'
    },
    buttonsGroup: {
        display: 'flex',
        flexDirection: 'row',
        [`& .${listItemClasses.root}`]: {
            padding: 0,
            width: 'auto',
        },
        [`& .${buttonBaseClasses.root}`]: {
            padding: 0
        }
    },
    button: {
        padding: 0,
        color: 'grey'
    },
    buttonText: {
        padding: '5px'
    },
    buttonClear: {minWidth: 'auto', textTransform: 'none', color: 'grey'},
    selected: {
        border: '1px solid black',
        borderRadius: '5px'
    }
}