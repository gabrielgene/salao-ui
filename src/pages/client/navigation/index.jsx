import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DateIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import DomainIcon from '@material-ui/icons/Domain';

import Calendar from '../../common/calendar';
import Profile from '../register';
import MySalons from '../my-salons';
import withStyles from './styles.js';

const Navigation = ({ classes }) => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      {value === 0 && <Calendar />}
      {value === 1 && <Profile />}
      {value === 2 && <MySalons />}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Agendamentos" icon={<DateIcon />} />
        <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
        <BottomNavigationAction label="Meus Salões" icon={<DomainIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default withStyles(Navigation);
