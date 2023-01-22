import React, { useContext } from "react"
import "@testing-library/jest-dom/extend-expect"
//import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
//import { MemoryRouter } from "react-router-dom"
import Navigation from "./navigation.component"
//import { Context, ContextProvider } from "../../context/context"
import { render, screen, waitFor } from "../../test-utils"

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
})


// const mockContextValues =  { 
//     option: "tv", 
//     searchQuery: jest.fn() ,
//     setOption: jest.fn()
// }

//console.log(Context.option)
// const Wrapper = () => {
//     //const { option } = React.useContext(Context)
//     const { option, searchQuery, setOption } = useContext(Context)
//     //const changeOption = () => setOption("movie") 
//     // const activeMovie = option === "movie" ? "active" : ""
//     // const activeTv= option === "tv" ? "active" : "" 
   
//     const changeOption = () => setOption("movie")
//     return (
//         // <ul>
//         //   <li className={activeMovie} onClick={() => setOption("movie")}>Movie</li>
//         //   <li className={activeTv} onClick={() => setOption("tv")}>Tv</li>
//         // </ul>
//         <ContextProvider>
//             <MemoryRouter>
//                 <Navigation changeOption={changeOption}/>
//             </MemoryRouter>
//         </ContextProvider>
//     )
// }

// const renderComponent = () => {
//     const mockContextValues =  { 
//         option: "tv", 
//         searchQuery: jest.fn() ,
//         setOption: jest.fn()
//     }
//     render(
//         <Context.Provider value={mockContextValues}>
//             <MemoryRouter>
//                 <Navigation />
//             </MemoryRouter>
//         </Context.Provider>
       
//     )
// }

// jest.mock("../../context/context/Context")
// describe("Navigation", () => {
//     // const user = userEvent.setup()
    
//     test("should render Navigation correctly", async() => {
//         const user = userEvent.setup()
//         //const spuSetOption = jest.spyOn(Context, "setOption")
//         renderComponent()
//         // const link = screen.getByRole("link")
//         // expect(link).toHaveAttribute("href", "/")
        
//         const listItems = screen.getAllByRole("listitem")
//         expect(listItems).toHaveLength(2)
        
//         const movie = screen.getByText(/movie/i)
//         const tv = screen.getByText(/tv/i)
        
//         expect(movie).not.toHaveClass("active")
//         expect(tv).toHaveClass("active")
//         console.log(mockContextValues.option)
//         // user.click(movie)
        
//         // //console.log(mockContextValues.option)
       
//         // //mockContextValues.option = "movie"
//         // console.log(mockContextValues.option)
        
//         // // const originalUseContext = React.useContext
//         // // const mockReactUseContext = jest.fn().mockReturnValue({...mockContextValues, option: "movie"})
//         // // React.useContext = mockReactUseContext
//         // //expect(spuSetOption).toHaveBeenCalledWith()
//         // //movie.onclick()
//         // // await waitFor(() => {
//         //     expect(tv).not.toHaveClass("active")
//         // //})
//         // expect(movie).toHaveClass("active")
//         // expect(mockContextValues.option).toEqual("movie")
//         // expect(mockContextValues.setOption).toHaveBeenCalled()
//         // await waitFor(() => {
//         //     expect(tv).not.toHaveClass("active")
//         // }) 
//         // await waitFor(() => {
//         //     expect(movie).toHaveClass("active")
          
//         // })
//     })

//     test("should change option on clicking movie", async() => {
//         //const setOption = jest.fn()
//         const user = userEvent.setup()
//         renderComponent()
        
//         // const handlClick = jest.spyOn(React, "useState")
//         // handlClick.getMockImplementation(option => [option, setOption])

//         const movie = screen.getByText(/movie/i)
//         const tv = screen.getByText(/tv/i)

//         ///await userEvent.click(movie)
//         await user.click(movie)
//         // expect(mockContextValues.option).toEqual("movie")
//         // expect(mockContextValues.setOption).toHaveBeenCalled()
//         await waitFor(() => expect(tv).not.toHaveClass("active")
//         ) 
//         await waitFor(() => {
//             expect(movie).toHaveClass("active")          
//         })
    
//     })
// })
