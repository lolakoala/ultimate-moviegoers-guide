import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import MovieCard from './Card'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: 48,
    marginBottom: 16,
  },
  gridList: {
    width: '100%',
    height: 575,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tile: {
    margin: 16,
  },
}))

const MovieList = ({movies, baseUrl}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <GridList 
                cellHeight={'auto'} 
                className={classes.gridList}
            >
                {movies.map(movie => (
                    movie.poster_path ? <MovieCard movie={movie} baseUrl={baseUrl} key={movie.id} classes={classes}/> : null     
                ))}
            </GridList>
        </div>

    )
}

MovieList.propTypes = {
    movies: PropTypes.array,
    baseUrl: PropTypes.string,
}

export default MovieList