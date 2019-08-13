import React, {useState, useEffect} from 'react'
import getFromMdb from './api/fetch'
import MovieList from './Movies/List'
import TitleBar from './TitleBar'
import NavButtons from './Controls/Nav'

const getMovies = async (sort, page, set) => {
  const {results, total_pages} = await getFromMdb(`movie/${sort}?page=${page}&`)
  set(results, total_pages)
}

const searchMovies = async (set, string, page) => {
  const {results, total_pages} = await getFromMdb(`search/movie?query=${string}&page=${page}&`)
  set(results, total_pages)
}

const getBaseUrl = async set => {
  const {images} = await getFromMdb('configuration?')
  set(`${images.base_url}${images.poster_sizes[2]}`)
}

const App = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [baseUrl, setBaseUrl] = useState('')
  const [sort, setSort] = useState('now_playing')
  const [searchString, setSearchString] = useState('')
  const [maxPages, setMaxPages] = useState(0)

  useEffect(() => {
    const set = (results, totalPages) => {
      setMovies(results)
      setMaxPages(totalPages)
    }

    if (searchString.length) {
      searchMovies(set, searchString, page)
    } else {
      getMovies(sort, page, set)
    }
  }, [sort, page, searchString])

  useEffect(() => {
    if (!baseUrl) {
      getBaseUrl(setBaseUrl)
    }
  }, [baseUrl])

  return (
    <div style={{'textAlign': 'center', 'position': 'relative'}}>
      <TitleBar setSearchString={setSearchString} setSort={setSort} currentSort={sort} setPage={setPage}/>
      <MovieList movies={movies} baseUrl={baseUrl}/>
      <NavButtons page={page} setPage={setPage} maxPages={maxPages}/>
    </div>
  );
}

export default App;
