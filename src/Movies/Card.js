import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import InfoDialog from './Dialog'
import getFromMdb from '../api/fetch'

const getDetails = async (id, set) => {
    const details = await getFromMdb(`movie/${id}?`)
    set(details)
}

const MovieCard = ({movie, baseUrl, classes}) => {
    const [expanded, setExpanded] = useState(false)
    const [details, setDetails] = useState({})
    const imgPath = `${baseUrl}${movie.poster_path}`

    useEffect(() => {
        if (expanded) {
            getDetails(movie.id, setDetails)
        }
    }, [expanded, movie.id])

    return (
        <GridListTile key={movie.id} className={classes.tile}>
            <img src={imgPath} alt={movie.title} />
            <GridListTileBar
            actionIcon={
                <IconButton aria-label={`info about ${movie.title}`} className={classes.icon} onClick={() => setExpanded(!expanded)}>
                    <InfoIcon />
                </IconButton>
            }
            />
            {expanded ? <InfoDialog 
                movie={{...movie, ...details}} 
                baseUrl={baseUrl} 
                open={expanded}
                handleClose={() => setExpanded(false)}
                /> : null}
        </GridListTile>
    )   
}

MovieCard.propTypes = {
    movie: PropTypes.object,
    baseUrl: PropTypes.string,
    classes: PropTypes.object,
}

export default MovieCard