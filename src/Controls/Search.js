import React, {useState} from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

const SearchControls = ({setSearchString, classes, setPage}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = event => {
        const {value} = event.target
        setSearchString(value)
        setInputValue(value)
        setPage(1)
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for Movies…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 
                  'aria-label': 'search',
                  value: inputValue,
                  onChange: handleChange,
                  }}
            />
        </div>
    )
}

SearchControls.propTypes = {
    setSearchString: PropTypes.func,
    classes: PropTypes.object,
    setPage: PropTypes.func,
}

export default SearchControls