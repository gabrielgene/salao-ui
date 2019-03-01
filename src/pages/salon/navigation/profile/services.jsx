import React from 'react';
import CardItem from '../../../../components/card-item';
import withStyles from './styles.js';

const Services = ({ classes }) => (
  <div className={classes.list}>
    <CardItem
      avatar="CC"
      primary="Corte de Cabelo - R$30,00"
      secondary="10:00 ~ 11:00"
    />
  </div>
);

export default withStyles(Services);
