export default class Song {
    public id:string = '';   
    public title:string= '';
    public artist: string = '';
    public genre: string = ''; 
    public length: number = 0; 
    public price: number = 0;
    constructor(title:string,artist:string, genre:string, length:number, price: number) {
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.length = length;
        this.price = price;
    }
}