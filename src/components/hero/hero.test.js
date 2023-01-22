import React from "react"
import { render, screen, waitFor } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect"
import Hero from "./hero.component";

describe("Hero", ()=> {
    test("should render Hero with 'now_playing' when option is 'movie", async() => {
        render(<Hero option="movie" />)
        const heading = await screen.findByRole("heading")
        expect(heading).toHaveTextContent(/playing/i)
        const link = await screen.findByRole("link")
        await waitFor(()=>{
            expect(link).toHaveAttribute("href", "/movie/1")
        })
    })

    test("should render Hero with 'on_the_air' when option is 'tv", async() => {
        render(<Hero option="tv" />)
        const heading = await screen.findByRole("heading")
        expect(heading).toHaveTextContent(/airing/i)
        const link = await screen.findByRole("link")
        await waitFor(()=>{
            expect(link).toHaveAttribute("href", "/tv/3")
        })
    })
    
})