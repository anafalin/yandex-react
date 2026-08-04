import React from 'react';
import SuezTraffic from '../suez-traffic/suez-traffic';
import appStyles from './app.module.css';
import { ReactComponent as ShipImage } from '../../images/ship.svg';
import { ReactComponent as BigWaveImage } from '../../images/big-wave.svg';
import { ReactComponent as SmallWaveImage } from '../../images/small-wave.svg';

function App() {
  return (
    <main className={appStyles.app}>
      <section className={appStyles.trafficContainer}>
        <ShipImage className={appStyles.ship} />
        <div className={appStyles.waves}>
          <BigWaveImage className={appStyles.bigWave} />
          <SmallWaveImage className={appStyles.smallWave} />
        </div>
        <SuezTraffic />
      </section>
    </main>
  );
}

export default App;