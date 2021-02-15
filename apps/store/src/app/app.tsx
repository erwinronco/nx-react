import React from 'react';

import styles from './app.module.scss';
import {getAllpersons} from '../fake-api'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export function App() {
  return (
    <div className={styles.app}>
      <div className="games-layout">
        {getAllpersons().map((x) => (
          <Card key={x.name}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {x.name}
                </Typography>
                <Typography variant="body2">
                  {x.city}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
