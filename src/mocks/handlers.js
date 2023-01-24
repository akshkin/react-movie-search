import { rest } from "msw";
const apiKey = "1d893d257088d8cf0cf34ce6257955bd"
//api_key=1d893d257088d8cf0cf34ce6257955bd&language=en-US&page=1
export const handlers = [
    rest.get(`https://api.themoviedb.org/3/movie/now_playing?`, (req, res, ctx) => {
        return res(
            ctx.json({results:[
                {
                    id: 1, 
                    title: "Avatar: The Way of Water", 
                    backdrop_path: "https://image.tmdb.org/t/p/w500/avatar-backdrop" , 
                    overview: " Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
                },
                {
                    id: 2, 
                    title: "Avatar: The Way of Water", 
                    backdrop_path: "https://image.tmdb.org/t/p/w500/avatar-backdrop" , 
                    overview: " Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
                }
            ]})
        )
    }),
    rest.get(`https://api.themoviedb.org/3/tv/on_the_air?`, (req, res, ctx) => {
        return res(
            ctx.json({results:[{
                id: 3, 
                name: "The Jungle Book 2", 
                backdrop_path: "https://image.tmdb.org/t/p/w500/the_jungle_book-backdrop" , 
                overview: " Mowgli has been living in the man-village with his little stepbrother Ranjan and his best friend Shanti. But the man-cub still has that jungle rhythm in his heart, and he misses his old buddies Baloo and Bagheera. When Mowgli wanders back to the wild for some swingin' fun, he soon finds the man-eating tiger Shere Khan is lurking in the shadows and planning his revenge."
            },{
                id: 4, 
                name: "The Jungle Book 2", 
                backdrop_path: "https://image.tmdb.org/t/p/w500/the_jungle_book-backdrop" , 
                overview: " Mowgli has been living in the man-village with his little stepbrother Ranjan and his best friend Shanti. But the man-cub still has that jungle rhythm in his heart, and he misses his old buddies Baloo and Bagheera. When Mowgli wanders back to the wild for some swingin' fun, he soon finds the man-eating tiger Shere Khan is lurking in the shadows and planning his revenge."
            }]})
        )
    })

]