import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Fab from '@material-ui/core/Fab';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ReplyIcon from '@material-ui/icons/Reply';

import withStyles from './styles.js';
import Info from './info';
import Services from './services';

const Profile = ({ classes }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Genê Barber Shop
          </Typography>
        </Toolbar>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Informações" />
          <Tab label="Serviços" />
        </Tabs>
      </AppBar>
      {value === 0 && <Info />}
      {value === 1 && <Services />}
      <div className={classes.fab}>
        <Fab aria-label="Share" color="secondary">
          <ReplyIcon className={classes.replyIcon} />
        </Fab>
      </div>
    </div>
  );
};

export default withStyles(Profile);
