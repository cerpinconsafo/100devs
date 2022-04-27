//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShows {
    constructor(title, genre, rating, numOfEp){
        this.title = title
        this.genre = genre  
        this.rating = rating
        this.numOfEp = numOfEp
    }
    play(){
        console.log('Playing...')
    }
    stop(){
        console.log('Stopping...')
    }
    saveToList(){
        console.log('Saved to List...')
    }
}

let bridgerton = new MakeNetflixShows ("Bridgerton", "Romance", "Young Adult", "24 episodes")

let sciFi = new MakeNetflixShows ("Some Generic Single Word Title", "Space Horror", "Mature", "12 episodes")