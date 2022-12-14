import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {changeGenre} from "../../../redux/reducers/anime";
import {useDispatch} from "react-redux";

const AnimeSort = () => {
    const dispatch = useDispatch()
    const [genreState, setGenreState] = useState('')
    useEffect(() => {
        dispatch(changeGenre(genreState))
    },[genreState])
    return (
        <Box className="anime__filter-box" sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'orange'}} id="demo-simple-select-label">Жанр</InputLabel>
                <Select style={{color: 'orange'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={genreState}
                        label="fasf"
                        onChange={(e) => setGenreState(e.target.value)}
                >
                    <MenuItem className="anime__filter-item"  value="">По умолчанию</MenuItem>
                    <MenuItem className="anime__filter-item"  value="приключение">Приключения</MenuItem>
                    <MenuItem className="anime__filter-item"  value="комедия">Комедия</MenuItem>
                    <MenuItem className="anime__filter-item"  value="экшен">Экшен</MenuItem>
                    <MenuItem className="anime__filter-item"  value="фэнтези">Фэнтези</MenuItem>
                    <MenuItem className="anime__filter-item"  value="мистика">Мистика</MenuItem>
                    <MenuItem className="anime__filter-item"  value="драма">Драма</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default AnimeSort;