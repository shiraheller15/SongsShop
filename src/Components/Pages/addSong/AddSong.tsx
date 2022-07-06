import { AddCircle, ReplayCircleFilled } from "@mui/icons-material";
import { Autocomplete, BottomNavigation, BottomNavigationAction, IconButton, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";


export default function AddSong(arraySongs:any, setArraySongs:any) {
    const genreList = [{label: 'ROCK'}, {label:'POP'},{label:'RAP'},{label:'CLASSICAL'},{label:'FUNK'},{label:'SOUL'},{label:'HIPHOP'}];
    const newSong = {
        title: '',
        artist: '',
        genre: '',
        length: 0,
        price: 0
    };
    const handleSubmitAdd = () => {
      alert('Add');
      axios.put('http://localhost:8080/songs/addSong',newSong);
      // setArraySongs = () => {setArraySongs([...arraySongs,newSong])};
    };

      const theme = createTheme();
    return(
        <>
            <h1 style={{textAlign:'center',fontSize:'60px',fontFamily:'Cooper Black', color:'purple'}}>Add song</h1>
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
                <BottomNavigationAction onClick={handleSubmitAdd} label="Add" value="Add" icon={<IconButton style={{color:"purple"}} aria-label="add" size="large"><AddCircle fontSize="inherit"></AddCircle></IconButton> } />
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