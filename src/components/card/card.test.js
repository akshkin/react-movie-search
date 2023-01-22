import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Card from "./card.component"

test("should render Card correctly", () => {
    const mockMovie = {
        id: 1, 
        poster_path:" https://image.tmdb.org/t/p/w500/poster", 
        vote_average: 7, 
        vote_count: 20, 
        release_date: "1-1-2020" 
    } 
    const {snapshot} = render(
        <MemoryRouter>
            <Card movie={mockMovie} option="movie"/>
        </MemoryRouter>
    )
    expect(snapshot).toMatchSnapshot()
})