import { AIP_KEY } from "./env.js";

const form = document.querySelector("form")

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${AIP_KEY}&language=ko&page=1`;

const movieDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, "_blank");
};
const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector(".contents");
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const info = document.createElement("div");
  const h3 = document.createElement("h3");
  const date = document.createElement("div");
  const rate = document.createElement("div");
  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";
  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${original_title} (${title})`;
  date.innerText = release_date;
  rate.innerText = `:별똥별::별똥별::별똥별:${vote_average}`;
  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);
  poster.addEventListener("click", movieDetail);
};
fetch(url)
  .then((response) => response.json())
  .then(({ results }) => {
    results.forEach((movie) => {
      createBlock(movie);
    });
  });

  const searchMovie = (e) => {
    e.preventDefault();
    
    const input = document.querySelector("input")
    const {value : keyword} = input;
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${AIP_KEY}&
    query=${keyword}&include_adult=false&language=en-US&page=1`

    if(keyword) {

      const removeAll= ()=>{
        const movies = document.querySelectorAll(".movie")
        movies.forEach((movie)=>{
          movie.remove()
        })
      }

      fetch(searchURL)
      .then((response)=>response.json())
      .then(({ results })=>results.forEach((movie)=>{
        createBlock(movie);
      }))
    }
  }

  form.addEventListener("submit",searchMovie);
