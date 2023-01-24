import React from "react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import Navigation from "./navigation.component"
import { render, screen,waitFor } from "../../test-utils"
import Hero from "../hero/hero.component"
import MovieDetail from "../../routes/movieDetails/movie"
import { Routes, Route } from "react-router-dom"

afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });

describe("Navigation", () => {
    
    test("should render Navigation with default option as 'movie' correctly", () => {
        render(<Navigation />)
        const movie = screen.getByText(/movie/i)
        const tv = screen.getByText(/tv/i)
        expect(movie).toHaveClass("active")
        expect(tv).not.toHaveClass("active")
    })
    
    test("should show 'tv' as active when clicking on tv", async() => {
        const user = userEvent.setup()
        render(<Navigation />)    
        const movie = screen.getByText(/movie/i)
        const tv = screen.getByText(/tv/i)   

        await user.click(tv)
        expect(movie).not.toHaveClass("active")
        expect(tv).toHaveClass("active")
    })

  
    test.only("options should not be present in the Movie Details page", async() => {
        window.scrollTo = jest.fn()
        const user = userEvent.setup()
        render(
            <>
                <Navigation />
                <Hero option="movie"/>
                <Routes>
                    <Route path="/movie/1" element={<MovieDetail />} />
                </Routes>

            </>            
        )
        const options = screen.getAllByRole("listitem")
        options.map(option => expect(option).toBeInTheDocument())
        
        const link = await screen.findAllByRole("link")
        await waitFor(()=>{
            expect(link[1]).toHaveAttribute("href", "/movie/1")
        })
        await user.click(link[1])
        options.map(option => expect(option).not.toBeInTheDocument())
    })
})


