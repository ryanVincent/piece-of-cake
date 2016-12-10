import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default function CakeItem({ cake }) {
  return (
    <Card>
      <CardMedia>
        <img src={cake.image} />
      </CardMedia>
      <CardTitle title={cake.title} subtitle={cake.desc} />
      <CardActions>
        <FlatButton label="Edit" />
      </CardActions>
    </Card>);
}
