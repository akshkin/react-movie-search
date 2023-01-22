import React from "react";
import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event"
import Pagination from "./pagination";

describe("should render Pagination", () => {
    test("should check that the previous button is disabled initially", async() => {
        render(<Pagination />)
        const buttons = await screen.findAllByRole("button")
        expect(buttons[0]).toBeDisabled()
        const firstButton = buttons[1]
        expect(firstButton).toHaveTextContent(1)
        expect(firstButton).toHaveClass("active-page")

    })
    
    test("should show the previous button as not disabled when current page is not the first page", async () => {
        const user = userEvent.setup()
        render(<Pagination />)
        const buttons = await screen.findAllByRole("button")
        await user.click(buttons[2])
        expect(buttons[0]).not.toBeDisabled()
    })

    test("should show next button as disabled when current page is the last page", async () => {
        const user = userEvent.setup()
        render(<Pagination />)
        const buttons = await screen.findAllByRole("button")
        await user.click(buttons[buttons.length - 2])
        expect(buttons[buttons.length - 1]).toBeDisabled()
    })
    test("should show prev page as active page on clicking previous icon", async() => {
        const user = userEvent.setup()
        render(<Pagination />)
        const buttons = await screen.findAllByRole("button")
        buttons.map(button => console.log(button.textContent))

        await user.click(buttons[0])
        expect(buttons[1]).toHaveClass("active-page")
    })

})