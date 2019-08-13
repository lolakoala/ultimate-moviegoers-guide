import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SortControl from './Controls/Sort'
import SearchControl from './Controls/Search'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 150,
        '&:focus': {
          width: 200,
        },
      },
    },
    list: {
        width: 250,
      },
  }))

const TitleBar = ({setSearchString, setSort, currentSort, setPage}) => {
    const classes = useStyles()
    const [sortingOpen, setSortingOpen] = useState(false)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setSortingOpen(!sortingOpen)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    Ultimate MovieGoers Guide
                </Typography>
                <SearchControl setSearchString={setSearchString} classes={classes} setPage={setPage}/>
                </Toolbar>
                <SortControl 
                    setPage={setPage}
                    currentSort={currentSort}
                    setSort={setSort} 
                    open={sortingOpen} 
                    closeDrawer={() => setSortingOpen(false)}
                    classes={classes}
                />
            </AppBar>
        </div>
    )
}

TitleBar.propTypes = {
    setSort: PropTypes.func,
    setSearchString: PropTypes.func,
    currentSort: PropTypes.string,
    setPage: PropTypes.func,
}

export default TitleBar