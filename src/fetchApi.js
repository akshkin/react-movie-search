const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd734a9f4d3msh064209564a8df49p160b17jsn7590bd720856',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const tmdbOptions = {
  headers: {
    "Request URL": "https://api/themoviedb.org/3"
  }
}

export const apiKey = "1d893d257088d8cf0cf34ce6257955bd"
export const baseYtUrl = "https://youtube-v31.p.rapidapi.com"
export const baseTmdbUrl = "https://api.themoviedb.org/3"

export const fetchTrailer = async (name) => {
  const response = await fetch(`${baseYtUrl}/search?q=${name}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
  const data = await response.json()
  return data
}

export const fetchDataFromApi = async (url) => {
  const response = await fetch(`${baseYtUrl}/${url}`, options)
  const data = await response.json()
  return data
}

export const fetchPopular = async (option, category) => {
  const response = await fetch(`${baseTmdbUrl}/${option}/${category}?api_key=${apiKey}&language=en-US&page=1`)
  const data = await response.json()
  return data
}

export const fetchMovie = async (option, id) => {
  const response = await fetch(`${baseTmdbUrl}/${option}/${id}?api_key=${apiKey}&language=en-US`)
  const data = await response.json()
  return data
}

export const fetchCategory = async(option, id, category) => {
  const response = await fetch(`${baseTmdbUrl}/${option}/${id}/${category}?api_key=${apiKey}&language=en-US&page=1`)
  const data = await response.json()
  return data
}


