import { render, screen, waitFor } from "../../test-utils";
import userEvent from "@testing-library/user-event"
import SearchPage from "./searchPage";
import { SearchInput } from "../../components";
import {  Route, Routes } from "react-router-dom";

test("should navigate to SearchPage on entering search term", async() => {
    const user = userEvent.setup()
    render(
        <>
            <SearchInput />
            <Routes>
                <Route exact path="/search/:query" element={<SearchPage />}/>
            </Routes>
        </>
    )
    const input = screen.getByRole("searchbox")
    expect(input).toBeInTheDocument()
    await user.click(input)
    await user.type(input, "train")
    await user.keyboard("{Enter}")
    await waitFor(async() => {
        const heading = await screen.findByRole("heading")
        expect(heading).toHaveTextContent(/train/i)
    })

})
