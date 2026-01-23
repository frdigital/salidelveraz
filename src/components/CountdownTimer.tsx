import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Get or set the countdown end time in localStorage
    const getEndTime = () => {
      const stored = localStorage.getItem('countdown_end');
      if (stored) {
        const endTime = parseInt(stored, 10);
        if (endTime > Date.now()) {
          return endTime;
        }
      }
      // Set new countdown: 23 hours, 59 minutes from now
      const newEndTime = Date.now() + (23 * 60 * 60 * 1000) + (59 * 60 * 1000);
      localStorage.setItem('countdown_end', newEndTime.toString());
      return newEndTime;
    };

    const endTime = getEndTime();

    const calculateTimeLeft = () => {
      const difference = endTime - Date.now();
      
      if (difference <= 0) {
        // Reset countdown when it reaches zero
        localStorage.removeItem('countdown_end');
        return { hours: 23, minutes: 59, seconds: 59 };
      }

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center">
        <div className="bg-background/20 backdrop-blur-sm px-3 py-2 rounded-lg min-w-[3.5rem]">
          <span className="text-2xl md:text-3xl font-bold font-heading tabular-nums">
            {formatNumber(timeLeft.hours)}
          </span>
        </div>
        <span className="text-xs mt-1 opacity-80">HORAS</span>
      </div>
      <span className="text-2xl md:text-3xl font-bold animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-background/20 backdrop-blur-sm px-3 py-2 rounded-lg min-w-[3.5rem]">
          <span className="text-2xl md:text-3xl font-bold font-heading tabular-nums">
            {formatNumber(timeLeft.minutes)}
          </span>
        </div>
        <span className="text-xs mt-1 opacity-80">MIN</span>
      </div>
      <span className="text-2xl md:text-3xl font-bold animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-background/20 backdrop-blur-sm px-3 py-2 rounded-lg min-w-[3.5rem]">
          <span className="text-2xl md:text-3xl font-bold font-heading tabular-nums">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
        <span className="text-xs mt-1 opacity-80">SEG</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
