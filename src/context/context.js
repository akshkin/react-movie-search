import { createContext, useState, useEffect } from "react"

const Context = createContext()

function ContextProvider ({ children }) {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [option, setOption] = useState("movie" || sessionStorage.getItem("option"))
  const [thisId, setThisId] = useState(sessionStorage.getItem("search"))
  

  useEffect(() => {
    setOption(sessionStorage.getItem("option"))
    setThisId(sessionStorage.getItem("search"))
  }, [option, thisId])

  const apiKey = process.env.TMDB_API_KEY
  
  const searchQuery = async () => {
     await fetch(`
      https://api.themoviedb.org/3/search/${option}?api_key=1d893d257088d8cf0cf34ce6257955bd&language=en-US&query=${searchTerm}&page=${currentPage}&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results)
          setTotalPages(data.total_pages)  
          setLoading(false)      
        })
        .catch(error => console.log("Error: ", error)) 
  }   

  const value = { 
    loading,
    setLoading,
    searchQuery,
    movies,
    currentPage,
    setCurrentPage,
    totalPages,
    searchTerm,
    setSearchTerm,
    option,
    setOption,
    thisId,
    setThisId
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }