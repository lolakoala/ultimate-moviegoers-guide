import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import NextIcon from '@material-ui/icons/NavigateNext'
import BackIcon from '@material-ui/icons/NavigateBefore'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'

const NavButtons = ({setPage, page, maxPages}) => {
    return (
        <div style={{'display': 'flex', 'position': 'absolute', 'right': '48px'}}>
            {page > 1 ? <div>
                <IconButton onClick={() => setPage(1)}>
                    <FirstPage />
                </IconButton>
                <IconButton onClick={() => setPage(page - 1)}>
                    <BackIcon />
                </IconButton> 
            </div> : null}
            {page < maxPages ? <IconButton onClick={() => setPage(page + 1)}>
                <NextIcon />
            </IconButton> : null}
            {page === maxPages ? null : <IconButton onClick={() => setPage(maxPages)}>
                <LastPage />
            </IconButton>}
        </div>
    )
}

NavButtons.propTypes = {
    setPage: PropTypes.func,
    page: PropTypes.number,
    maxPages: PropTypes.number,
}

export default NavButtons

