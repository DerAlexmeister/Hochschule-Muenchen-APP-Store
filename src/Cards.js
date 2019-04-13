import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 180,
  },
  bullet: {
    display: 'inline-block',
    margin: '20px',
    padding: "20px",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div style = {{position: "absolute", top: 150, left: 0}}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            App1
          </Typography>
          <Typography variant="headline" component="h2">
            App
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Tag
          </Typography>
          <Typography component="p">
           Beschreibung
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Download</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);