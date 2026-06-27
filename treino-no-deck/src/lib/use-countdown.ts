'use client';

import { useState, useEffect, useCallback } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  isReady: boolean;
}

function calcDiff(target: Date): Countdown {
  const now = Date.now();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true, isReady: true };
  }

  const totalSec = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
    isExpired: false,
    isReady: true,
  };
}

export function useCountdown(targetDate: string): Countdown {
  const [state, setState] = useState<Countdown>({
    days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false, isReady: false,
  });

  const tick = useCallback(() => {
    setState(calcDiff(new Date(targetDate)));
  }, [targetDate]);

  useEffect(() => {
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tick]);

  return state;
}
