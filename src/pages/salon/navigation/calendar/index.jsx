import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import Topbar from '../../../../components/topbar';
import CardItem from '../../../../components/card-item';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 120px)',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

const Calendar = ({ classes, history }) => {
  return (
    <div>
      <Topbar title="Agenda" />
      <List className={classes.root} subheader={<li />}>
        {[...Array(10).keys()].map(sectionId => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`1${sectionId}/03/2019`}</ListSubheader>
              {[...Array(6).keys()].map(item => (
                <CardItem
                  key={item}
                  handleClick={() => history.push('/agendamento/123')}
                  avatar="CC"
                  primary="Corte de Cabelo - R$30,00"
                  secondary="10:00 ~ 11:00 - Gabriel Genê"
                />
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );
};

export default withStyles(styles)(withRouter(Calendar));
