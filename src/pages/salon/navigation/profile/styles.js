import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  accordion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  grow: {
    flexGrow: 1,
  },
  list: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    marginBottom: theme.spacing.unit * 3,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 10,
    display: 'flex',
    justifyContent: 'flex-end',
    right: theme.spacing.unit * 2,
    width: '100%',
  },
  img: {
    width: '100%',
    height: theme.spacing.unit * 15,
    objectFit: 'cover',
  },
});

export default withStyles(styles);
