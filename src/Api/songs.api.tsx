import Song from "../Components/Song";
import axios from "axios";

export const songs:Song[] = [];

export const addNewSong = async(newSong:Song) => {
    await axios({url:`http://localhost:8080/songs/addSong`, method:'POST', data:newSong}).then((val) => {
        console.log(val);
    }).catch((err) => {
        console.log(err.message);
    })
}

export async function getSongs() {
    alert('getSongs...');
    await axios.get('http://localhost:8080/songs/')
    .then(res => {return res.data})
    .catch((err) => console.log(err.message));
}

export const deleteSong = (id:string) => {
    axios.delete(`http://localhost:8080/songs/delete/${id}`)
    .catch((err) => console.log(err.message));
}







