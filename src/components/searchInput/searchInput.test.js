import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import SearchInput from "./searchInput"
import { Context, ContextProvider } from "../../context/context"


test("should render SearchInput correctly", async() => {
    const user = userEvent.setup()
    render(
        <ContextProvider>
            <MemoryRouter>
                <SearchInput />
            </MemoryRouter>
        </ContextProvider>
    )
    const search = screen.getByRole("searchbox")
    await user.type(search, "Train")
    expect(search.value).toEqual("Train")

})
