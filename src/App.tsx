import React from 'react';
import './App.css';
import { IPlayer } from './models/task';
import { PlayerComponentContainer } from './components/PlayerList/PlayersComponentContainer';

import { hot } from 'react-hot-loader';
import OMDBSearchComponentContainer from './components/OMDBSearch/OMDBSearchContainer';
import { Grid } from '@material-ui/core';
import Accordion from './components/organisms/accordionDONEWRONG/AccordionDONEWRONG';
import AccordionSection from './components/organisms/accordionDONEWRONG/AccordionSectionDONEWRONG';

const App: React.FC<{ initialTasks?: IPlayer[] }> = ({ initialTasks = [{ id: 1, name: "First Task", }] }) => {

  // const [] = useState(initialTasks);

  return (
    <div className="app-class">
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <h2>React!</h2>
          <PlayerComponentContainer />
        </Grid>
        <Grid item xs={6}>
          <OMDBSearchComponentContainer />
        </Grid>
        <Grid item xs={3}>
          <h2>Accordion demo</h2>
          <Accordion>
            <AccordionSection label='Alligator Mississipi' isOpen={false} onClick={() => console.log("section clicked")}>
              <p>Some alligator facts</p>
            </AccordionSection>
            <AccordionSection label='Crocodile Dississipi' isOpen={false} onClick={() => console.log("section clicked")}>
              <p>Some sweet crocodile diss tracks</p>
            </AccordionSection>
            <div>

            </div>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}

export default hot(module)(App);
