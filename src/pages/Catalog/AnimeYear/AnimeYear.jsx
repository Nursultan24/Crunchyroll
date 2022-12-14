import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {changeYear} from "../../../redux/reducers/anime";
import {useDispatch} from "react-redux";

const AnimeYear = () => {
    const dispatch = useDispatch()

    const [yearState, setYearState] = useState('')

    useEffect(() => {
        dispatch(changeYear(yearState))
    },[yearState])
    return (

        <Box className="anime__filter-box" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'orange'}} id="demo-simple-select-label">Год</InputLabel>
                <Select style={{color: 'orange'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={yearState}
                        label="fasf"
                        onChange={(e) => setYearState(e.target.value)}
                >
                    <MenuItem className="anime__filter-item"  value="">По умолчанию</MenuItem>
                    <MenuItem className="anime__filter-item"  value={2022}>2022</MenuItem>
                    <MenuItem className="anime__filter-item"  value={2021}>2021</MenuItem>
                    <MenuItem className="anime__filter-item"  value={2019}>2019</MenuItem>
                    <MenuItem className="anime__filter-item"  value={2018}>2018</MenuItem>
                    <MenuItem className="anime__filter-item"  value={2017}>2017</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default AnimeYear;