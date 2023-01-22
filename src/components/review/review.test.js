import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import Review from "./review"
import { ContextProvider } from "../../context/context"

const renderComponent = (mockReview) => {
    render (
        <MemoryRouter>
            <Review review={mockReview}/>
        </MemoryRouter>
    )
}

test("should render Review correctly", async() => {
    
    const mockReview = {
        author: "Kay Cee",
        content: "Audio was superb. Video was great, but it the 60fps takes some getting used to. Story was awesome!"
    }
    expect(renderComponent(mockReview)).toMatchSnapshot()

    const readMore = screen.queryByText(/read more/i)
    expect(readMore).not.toBeInTheDocument()
    
})

test("should show 'read more' when content length greater than 250 and 'read less on clicking 'read more", async ()=>{
    const user = userEvent.setup()
    const mockReview = {
        author: "Appfel",
        content: "I really enjoyed Avatar: The way of water! It's a great second part to Avatar, getting back into the fight, setting a new environment and it actually left me even more thinking, of how we just destroy our earth and how bad humans can get. It is a long movie, but I enjoyed it so much, I didn't care. So, I would really say: watch it, it is worth it, especially when you watch the first part before, to get back into the mood!"
    }
    renderComponent(mockReview)
    
    const readMore = await screen.findByText(/read more/i)
    const content = await screen.findByText(/I really enjoyed Avata/i)
    const readMoreLength = readMore.textContent.length

    expect(readMore).toBeInTheDocument()
    expect(content.textContent).toHaveLength(250 + readMoreLength)
    
    await user.click(readMore)
    expect(readMore).toHaveTextContent(/read less/i)
    expect(content.textContent.length).toBeGreaterThan(265)
    await user.click(readMore)
    expect(readMore).toHaveTextContent(/read more/i)
    expect(content.textContent.length).toBe(265)

})


