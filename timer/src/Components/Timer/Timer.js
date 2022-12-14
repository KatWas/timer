import styles from './Timer.module.scss';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className={styles.time}>
      <div className={styles.digits}>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}:</span>
        <span>{('0' + ((time / 1) % 100)).slice(-2)}</span>
      </div>
      <div className='buttons'>
        <button className={styles.button} onClick={() => setRunning(true)}>
          Start
        </button>
        <button className={styles.button} onClick={() => setRunning(false)}>
          Stop
        </button>
        <button className={styles.button} onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Timer;