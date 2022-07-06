import { Autocomplete, BottomNavigation, BottomNavigationAction, IconButton, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { AddCircle, ReplayCircleFilled } from "@mui/icons-material";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

export default function EditSong(arraySongs:any, setArraySongs:any) {
    const genreList = [{label: 'ROCK'}, {label:'POP'},{label:'RAP'},{label:'CLASSICAL'},{label:'FUNK'},{label:'SOUL'},{label:'HIPHOP'}];
    const newSong = {
        title: '',
        artist: '',
        genre: '',
        length: 0,
        price: 0
    };
    const theme = createTheme();
    // Missing Id for editing
    const handleSubmitEdit = () => {
        // axios.post(`http://localhost:8080/songs/edit/${newSong.key}`, newSong);
        // setArraySongs = () => {setArraySongs([...arraySongs, newSong])};
    }
    return(
        <>
        <h1 style={{textAlign:'center',fontSize:'60px',fontFamily:'Cooper Black', color:'purple'}}>Edit song</h1>
            <hr/>
           <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField name='titleName' id="outlined-basic" label="Title" variant="outlined" margin="dense" onChange={e => newSong.title= e.target.value}/>
                    <br/>
                    <TextField label="Artist name" variant="outlined" margin="dense" onChange={e => newSong.artist= e.target.value}/>
                    <br/>
                    {/* check the genre input */}
                    <Autocomplete disablePortal id="combo-box-demo" options={genreList} sx={{ width: 222 }}
                        renderInput={(params) => <TextField {...params} label="Genre" onChange={e => newSong.genre= e.target.value}/>} />
                    <TextField id="outlined-basic" label="Length" variant="outlined" margin="dense" onChange={e => newSong.length= parseInt(e.target.value)}/>
                    <br/>
                    <TextField id="outlined-basic" label="Price" variant="outlined" margin="dense" onChange={e => newSong.price= parseInt(e.target.value)}/>
                    <br/>
                    <Link to="/">
                        <BottomNavigation sx={{ width: 240 }}>
                            <BottomNavigationAction onClick={handleSubmitEdit} label="Add" value="Add" icon={<IconButton style={{color:'purple'}} aria-label="add" size="large"><AddTaskIcon fontSize="inherit"></AddTaskIcon></IconButton> } />
                        </BottomNavigation>
                    </Link>
                    <Link to="/"> 
                        <BottomNavigation sx={{ width: 240 }}>
                            <BottomNavigationAction label="Back" value="Back" icon={<IconButton style={{color:'purple'}} aria-label="back" size="large"><ReplayCircleFilled fontSize="inherit"></ReplayCircleFilled></IconButton> } />
                        </BottomNavigation>
                </Link>
                </Box>
                </Box>
            </Container>
            </ThemeProvider>

           <hr/>
        </>
        
    )
}



// <TextField name='titleName' id="outlined-basic" label="Title" variant="outlined" margin="dense" onChange={e => newSong.title= e.target.value}/>
//             <br/>
//             <TextField id="outlined-basic" label="Artist name" variant="outlined" margin="dense" onChange={e => newSong.artist= e.target.value}/>
//             <br/>
//             {/* check the genre input */}
//             <Autocomplete disablePortal id="combo-box-demo" options={genreList} sx={{ width: 222 }}
//                 renderInput={(params) => <TextField {...params} label="Genre" onChange={e => newSong.genre= e.target.value}/>} />
//             <TextField id="outlined-basic" label="Length" variant="outlined" margin="dense" onChange={e => newSong.length= parseInt(e.target.value)}/>
//             <br/>
//             <TextField id="outlined-basic" label="Price" variant="outlined" margin="dense" onChange={e => newSong.price= parseInt(e.target.value)}/>
//             <br/>
//             <Link to="/"> 
//                 <BottomNavigation sx={{ width: 150 }}>
//                     <BottomNavigationAction label="Back" value="Back" icon={<IconButton style={{color:'purple'}} aria-label="back" size="large"><ReplayCircleFilled fontSize="inherit"></ReplayCircleFilled></IconButton>} />
//                 </BottomNavigation>
//            </Link>