import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BottomNavigation, BottomNavigationAction, IconButton, TextField } from '@mui/material';
import axios from 'axios';
import Song from '../../Song';
import styled from '@emotion/styled';
import { AddCircle, BorderColor, DeleteOutline, Search } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { getSongs,deleteSong } from '../../../Api/songs.api';


export default function SongsLandingPage(arraySongs:any, setArraySongs:any):JSX.Element {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleChangeDelete = () => {
        deleteSong('j');
    }
    useEffect(() => {
        alert('useEffect...');
        setArraySongs(getSongs());
    }, [])

    // Missing Id for deleting
    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize:'25px',
            fontFamily:'Cooper Black',
            color:'purple',
            backgroundColor: 'plum',
        },
        [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            fontSize:'15px',
            fontFamily:'Cooper Black',
            backgroundColor: 'white'
        },
        '&:last-child td, &:last-child th': {
        border: 0,
        },
    }));

    return(
        <div>
            <h1 style={{textAlign:'center',fontSize:'80px',fontFamily:'Cooper Black', color:'purple'}}>The songs shop</h1>
            {/* <TextField onChange={(val) => {setSearch(val.target.value)}} name='titleName' id="outlined-basic" label="Search by artist" variant="outlined" margin="normal"/>
            <BottomNavigationAction onClick={() => 
                        {setArraySongs(arraySongs?.filter((s:Song) => {s.artist === search}))}}
                         value='Search' icon={<IconButton style={{color:'purple'}} aria-label='searchArtist' size='medium'>
                            <Search fontSize='inherit'></Search></IconButton>} 
                /> */}
            <hr/>
            <TableContainer component={Paper}>
                <Table style={{alignItems: 'center',justifyContent: 'center'}}
                 sx={{ minWidth: 650 }}>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell>Artist</StyledTableCell>
                            <StyledTableCell>Genre</StyledTableCell>
                            <StyledTableCell>Length</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>
                        <br/>
                    </TableHead>
                <TableBody>
                {arraySongs?.map((song:Song) => (
                    <StyledTableRow key={song.id}>
                    <StyledTableCell>{song.title}</StyledTableCell>
                    <StyledTableCell>{song.genre}</StyledTableCell>
                    <StyledTableCell>{song.artist}</StyledTableCell>
                    <StyledTableCell>{song.length}</StyledTableCell>
                    <StyledTableCell>{song.price}</StyledTableCell>
                    <StyledTableCell>
                        <BottomNavigation sx={{ width: 30 }}>
                            <BottomNavigationAction onClick={handleChangeDelete} label="Remove" value="Remove" icon={<IconButton style={{color:'purple'}} aria-label='remove' size='medium'><DeleteOutline fontSize='inherit'></DeleteOutline></IconButton>} />
                            <Link to="/songs/toEdit/1">
                                <BottomNavigationAction onClick={() => { navigate('/songs/toEdit/1') }} label="Edit" value="Edit" icon={<IconButton style={{color:'purple'}} aria-label='edit' size='medium'><BorderColor fontSize='inherit'></BorderColor></IconButton>} />
                            </Link>
                        </BottomNavigation>  
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
            <hr/>
           
            <Link to="/songs/toAdd"> 
                <BottomNavigation sx={{ width: 1500 }}>
                    <BottomNavigationAction onClick={() => { navigate('/songs/toAdd') }} label="Add" value="Add" icon={<IconButton style={{color:'purple'}} aria-label='add' size='large'><AddCircle fontSize='inherit'></AddCircle></IconButton>} />
                </BottomNavigation>
           </Link>
        </div>
    )
}

function createDataSong(
    title: string,
    artist: string,
    genre: string,
    length: number,
    price: number
){
    return{title, artist, genre,length,price};
}

export const arraySongs = [
    createDataSong('Celebration','Tom','CLASSICAL', 5,28),
    createDataSong('Eclair', 'Raz','HIPHOP',2,90),
    createDataSong('Holyday','Romi','Soul', 4,30),
    createDataSong('Ring','John', 'POP',3,78),
    createDataSong('sky','Josh','ROCK',7,56)
    ];