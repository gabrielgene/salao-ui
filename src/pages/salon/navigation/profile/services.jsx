import React from 'react';
import Paper from '@material-ui/core/Paper';
import CardItem from '../../../../components/card-item';
import withStyles from './styles.js';

const Services = ({ classes }) => (
  <div className={classes.list}>
    <Paper elevation={2} className={classes.item}>
      <CardItem
        avatar="CC"
        primary="Corte de Cabelo - R$30,00"
        secondary="10:00 ~ 11:00"
      />
    </Paper>
  </div>
);

export default withStyles(Services);
