import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import numeral from 'numeral'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const InfoDialog = ({open, handleClose, movie, baseUrl}) => {
    const useStyles = makeStyles(theme => ({
        paper: {
            backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
      }))
    const classes = useStyles()
    const releaseDate = new Date(movie.release_date)

    const formatDate = date => {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ]
        
        const day = date.getDate()
        const monthIndex = date.getMonth()
        const year = date.getFullYear()
    
        return ` Released ${monthNames[monthIndex]} ${day}, ${year}`
    }

    const formatMoney = num => {
        return numeral(num).format('0,0.00')
    }

    // There is certainly more info to display, but the arrays (array-like structures) returned
    // from MDB are not compatible with array prototypes, so I left them off for simplicity/time. 

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="movie-dialog-title" open={open} className={classes.paper}>
                <DialogTitle id="movie-dialog-title" onClose={handleClose}>
                {movie.title}
                <br />
                {formatDate(releaseDate)}
                </DialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    {movie.tagline}
                    <br />
                    {`Runtime: ${movie.runtime} minutes`}
                </Typography>
                <Typography gutterBottom>
                    {movie.overview}
                </Typography>
                <Typography gutterBottom>
                    {movie.budget ? `Budget: $${formatMoney(movie.budget)}` : null}
                    {movie.budget ? <br /> : null}
                    {movie.revenue ? `Revenue to Date: $${formatMoney(movie.revenue)}` : null}
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Exit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

InfoDialog.propTypes = {
    movie: PropTypes.object,
    baseUrl: PropTypes.string,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
}

export default InfoDialog
    