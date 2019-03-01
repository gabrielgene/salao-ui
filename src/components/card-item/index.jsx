import React from 'react';
// import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ChevronIcon from '@material-ui/icons/ChevronRight';

const styles = theme => ({
  item: {
    marginBottom: theme.spacing.unit * 3,
    cursor: 'pointer',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
});

const CardItem = ({
  classes,
  avatar,
  history,
  handleClick,
  primary,
  secondary,
}) => (
  // <Paper elevation={2} className={classes.item}>
  <ListItem onClick={handleClick}>
    <Avatar color="primary" className={classes.avatar}>
      {avatar}
    </Avatar>
    <ListItemText primary={primary} secondary={secondary} />
    {!!handleClick && (
      <ListItemSecondaryAction>
        <IconButton aria-label="Arrow">
          <ChevronIcon />
        </IconButton>
      </ListItemSecondaryAction>
    )}
  </ListItem>
  // </Paper>
);

export default withStyles(styles)(CardItem);