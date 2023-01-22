import { render, screen } from "@testing-library/react"
import Cast from "./cast.component"

test("should render Cast correctly", () => {
    const mockChar = {
        profile_path: "https://image.tmdb.org/t/p/w500/poster", 
        original_name: "Morgan Freeman", 
        character: "Ellis Boyd"  
    } 
    const {snapshot} = render(
            <Cast char={mockChar} baseImg="https://image.tmdb.org/t/p/w500"/>        
    )
    expect(snapshot).toMatchSnapshot()
})