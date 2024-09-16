document.addEventListener("DOMContentLoaded",function(){

    const top5movies=[
        {title:"The GodFather",imageUrl:"film1.jpg",relaseDate:"1970",rated:"9.4",description:" Michael Corleone qui, après une attaque contre son père, se retrouve plongé dans le monde criminel de sa famille mafieuse"},
        {title:"The Dark knight",imageUrl:"film2.jpg",relaseDate:"2012",rated:"9.4",description:" Batman qui, après des années d'exil, doit revenir pour affronter Bane, un terroriste puissant menaçant Gotham City. Affaibli, Bruce Wayne doit retrouver sa force pour sauver la ville de la destruction totale."},
        {title:"Sutter island",imageUrl:"film3.jpg",relaseDate:"2010",rated:"8.2",description:" deux marshals, Teddy Daniels et Chuck Aule, qui enquêtent sur la disparition d'une patiente dans un hôpital psychiatrique situé sur une île isolée. Au fur et à mesure de l'enquête, Teddy découvre des secrets troublants sur l'île et commence à douter de sa propre réalité."},
        {title:"Sutter island",imageUrl:"film3.jpg",relaseDate:"2010",rated:"8.2",description:" deux marshals, Teddy Daniels et Chuck Aule, qui enquêtent sur la disparition d'une patiente dans un hôpital psychiatrique situé sur une île isolée. Au fur et à mesure de l'enquête, Teddy découvre des secrets troublants sur l'île et commence à douter de sa propre réalité."},
        {title:"Sutter island",imageUrl:"film3.jpg",relaseDate:"2010",rated:"8.2",description:" deux marshals, Teddy Daniels et Chuck Aule, qui enquêtent sur la disparition d'une patiente dans un hôpital psychiatrique situé sur une île isolée. Au fur et à mesure de l'enquête, Teddy découvre des secrets troublants sur l'île et commence à douter de sa propre réalité."},
        ]

        const moviesContainer=document.querySelector(".movies-container");

        top5movies.forEach(movie=>{
            const movieCard=document.createElement("div");
            movieCard.className=("movie-card");

            const movieImage=document.createElement("img")
            movieImage.src=movie.imageUrl;
            movieImage.alt=movie.title;

            const movieTitle=document.createElement("h2")
            movieTitle.textContent=movie.title;

            const movieDate=document.createElement("p")
            movieDate.className=("movie-release-date ")
            movieDate.textContent=movie.relaseDate

            const movieRated=document.createElement("p")
            movieRated.className=("movie-rating")
            movieRated.textContent=movie.rated

            const movieDesc=document.createElement("p")
            movieDesc.className=("movie-description")
            movieDesc.textContent=movie.description
            
            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieDate);
            movieCard.appendChild(movieRated);
            movieCard.appendChild(movieDesc);
            

            moviesContainer.appendChild(movieCard)






        });

});