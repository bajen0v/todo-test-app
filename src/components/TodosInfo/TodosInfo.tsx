import React, { FC } from "react";
import { Box, Button, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { dictionary } from "./dictionary";
import { BUTTONS_FILTER } from "./constants";
import { EFilter } from "../../interfaces";
import { styles } from "./styles";

interface IProps {
    selectFilter: EFilter;
    countCompleted: number;
    onClear: () => void;
    onChangeSelect: (select: EFilter) => void;
}

export const TodosInfo: FC<IProps> = ({ selectFilter, countCompleted, onClear, onChangeSelect }) => {
    
    const handleChangeFilter = (name: EFilter) => onChangeSelect(name);
    const handleClickClear = () => onClear();

    const getFilterButtons = () => {
        return BUTTONS_FILTER.map((el: { name: EFilter }, index: number) => {
            return (
                <ListItem sx={[styles.button, selectFilter === el.name && styles.selected]} key={index} onClick={() => handleChangeFilter(el.name)}>
                    <ListItemButton>
                        <ListItemText sx={styles.buttonText} primary={el.name}>{el.name}</ListItemText>
                    </ListItemButton>
                </ListItem>
            )
        })
    }

    return (
        <Box sx={styles.infoWrapper}>
            <Typography sx={styles.counterCompleted}>{`${countCompleted} ${dictionary.ItemsLeft}`}</Typography>
            <Box sx={styles.buttonsGroup}>{getFilterButtons()}</Box>
            <Button sx={styles.buttonClear} onClick={handleClickClear}>{dictionary.Clear}</Button>
        </Box>
    );
}
