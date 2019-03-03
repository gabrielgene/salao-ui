import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -4px 2px -2px rgba(0,0,0,0.05)',
  },
});

export default withStyles(styles);
