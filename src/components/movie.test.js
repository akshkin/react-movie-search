import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import Movie from "./movie"

test("should render Movie correctly", async() => {
    //const { movie, player, cast, similarMovies, reviews } 
    const mockMovie = { 
        title: "Avatar: The Way of Water", 
        tagline: "- Return to Pandora." , 
        genres: ["Science Fiction", "Adventure", "Action"], 
        overview : "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.", 
        homepage: "https://www.avatar.com/movies/avatar-the-way-of-water", 
        runtime: "192 minutes", 
        release_date : "2022-12-14", 
        vote_average: 7.7, 
        vote_count: 4419, 
        poster_path: "https://image.tmdb.org/t/p/w500/avatar-backdrop", 
        backdrop_path: "https://image.tmdb.org/t/p/w500/avatar-backdrop"
    } 
    const mockPlayer = {
        id: {
            videoId: "Ox8_HtUicHk"
        }
    }
    const mockCast = [
        {
            profile_path: "https://image.tmdb.org/t/p/w500/poster", 
            original_name: "Sam Worthington", 
            character: "Sully"  
        } ,
        {
            profile_path: "https://image.tmdb.org/t/p/w500/poster", 
            original_name: "Zoe Saldna", 
            character: "Neytiri"  
        } 
    ]
    const similarMovies = [
        {
            id: 4, 
            poster_path:"https://image.tmdb.org/t/p/w500/poster", 
            vote_average: 6.0, 
            vote_count: 20, 
            release_date: "1-1-2020" 
        },
        {
            id: 9, 
            poster_path:"https://image.tmdb.org/t/p/w500/poster", 
            vote_average: 7, 
            vote_count: 203, 
            release_date: "1-1-2020" 
        } 
    ]
    const reviews = [
        {
            author: "Kay Cee",
            content: "Audio was superb. Video was great, but it the 60fps takes some getting used to. Story was awesome!"
        },
        {
            author: "Appfel",
            content: "I really enjoyed Avatar: The way of water! It's a great second part to Avatar, getting back into the fight, setting a new environment and it actually left me even more thinking, of how we just destroy our earth and how bad humans can get. It is a long movie, but I enjoyed it so much, I didn't care. So, I would really say: watch it, it is worth it, especially when you watch the first part before, to get back into the mood!"
        }
    ]
    
    expect(render(
        <MemoryRouter>
            <Movie movie={mockMovie} player={mockPlayer} reviews={reviews} cast={mockCast} similarMovies={similarMovies} />
        </MemoryRouter>
        )).toMatchSnapshot()

    const link = await screen.findByText(/homepage/i)
    expect(link).toHaveAttribute("href", mockMovie.homepage)
})