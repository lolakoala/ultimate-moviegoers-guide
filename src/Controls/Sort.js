import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Bookmark from '@material-ui/icons/Bookmark'


const SortControls = ({setSort, closeDrawer, open, classes, currentSort, setPage}) => {
    const sortingArray = [
        {
            text: 'Now Playing',
            value: 'now_playing',
        },
        {
            text: 'Popular',
            value: 'popular',
        },
        {
            text: 'Top Rated',
            value: 'top_rated',
        }
    ]
    

    return (
        <Drawer open={open} onClose={closeDrawer}>
            <div
                className={classes.list}
                role="presentation"
                onClick={closeDrawer}
                onKeyDown={closeDrawer}
                >
                <List>
                    {sortingArray.map(sortingObj => (
                        <ListItem 
                            button 
                            key={sortingObj.value} 
                            onClick={() => {
                                setSort(sortingObj.value)
                                setPage(1)
                            }}
                            selected={currentSort === sortingObj.value}
                        >
                            <ListItemIcon>
                                <Bookmark />
                            </ListItemIcon>
                            <ListItemText primary={sortingObj.text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    )
}

SortControls.propTypes = {
    setSort: PropTypes.func,
    open: PropTypes.bool,
    closeDrawer: PropTypes.func,
    classes: PropTypes.object,
    currentSort: PropTypes.string,
    setPage: PropTypes.func,
}

export default SortControls