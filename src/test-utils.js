import { render } from "@testing-library/react";
import { ContextProvider } from "./context/context";
import { MemoryRouter } from "react-router-dom";

const renderWithContext = (children, options) => {
    render(
        <MemoryRouter>
            {children}
        </MemoryRouter>, 
        { wrapper: ContextProvider, ...options}
    )
}


export * from "@testing-library/react"

// override render method
export { renderWithContext as render }