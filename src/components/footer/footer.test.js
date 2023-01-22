import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Footer from "./footer"

test("should render Footer correctly", () => {
    render(<Footer/>)
    const link = screen.getByRole("link", {
        name: /tmdb/i
    })
    const tmdbUrl = "https://www.themoviedb.org/"
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", `${tmdbUrl}`)
})