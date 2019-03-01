import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import DomainIcon from '@material-ui/icons/Domain';

import Calendar from './calendar';
import Profile from './profile';
import withStyles from './styles.js';

const Navigation = ({ classes }) => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      {value === 0 && <Calendar />}
      {value === 1 && <Profile />}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Agenda" icon={<ListIcon />} />
        <BottomNavigationAction label="Perfil" icon={<DomainIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default withStyles(Navigation);
