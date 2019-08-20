import React, {useState, useEffect, useReducer} from 'react'
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
  // const [movies, setMovies] = useState([])
  // const [page, setPage] = useState(1)
  // const [baseUrl, setBaseUrl] = useState('')
  // const [sort, setSort] = useState('now_playing')
  // const [searchString, setSearchString] = useState('')
  // const [maxPages, setMaxPages] = useState(0)

  const initialState = {
    movies: [],
    page: 1,
    baseUrl: '',
    sort: 'now_playing',
    searchString: '',
    maxPages: 0,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setMovies':
        return { movies: action.movies }
      case 'setPage':
        return { page: action.page }
      case 'setBaseUrl':
        return { baseUrl: action.baseUrl }
      case 'setSort':
        return {sort: action.sort}
      case 'setSearchString':
        return {searchString: action.searchString}
      case 'setMovies':
        return {maxPages: action.maxPages}
      default:
        return new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const set = (movies, maxPages) => dispatch({
        type: 'setMovies',
        movies,
        maxPages, 
      })
    

    if (state.searchString.length) {
      searchMovies(set, state.searchString, state.page)
    } else {
      getMovies(state.sort, state.page, set)
    }
  }, [state.sort, state.page, state.searchString])

  useEffect(() => {
    if (!state.baseUrl) {
      getBaseUrl(baseUrl => dispatch({type: 'setBaseUrl', baseUrl}))
    }
  }, [state.baseUrl])

  return (
    <div style={{'textAlign': 'center', 'position': 'relative'}}>
      <TitleBar 
        setSearchString={searchString => dispatch({type: 'setSearchString', searchString})} 
        setSort={sort => dispatch({type: 'setSort', sort})} 
        currentSort={state.sort} 
        setPage={page => dispatch({type: 'setPage', page})}/>
      <MovieList movies={state.movies} baseUrl={state.baseUrl}/>
      <NavButtons page={state.page} setPage={page => dispatch({ type: 'setPage', page })} maxPages={state.maxPages}/>
    </div>
  );
}

export default App;
