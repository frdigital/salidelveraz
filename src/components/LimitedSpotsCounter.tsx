import { useState, useEffect } from "react";
import { Users, AlertTriangle } from "lucide-react";

const LimitedSpotsCounter = () => {
  const [spots, setSpots] = useState<number>(7);

  useEffect(() => {
    // Get or set the spots count in localStorage
    const getSpots = () => {
      const stored = localStorage.getItem('limited_spots');
      const lastUpdate = localStorage.getItem('limited_spots_update');
      
      if (stored && lastUpdate) {
        const storedSpots = parseInt(stored, 10);
        const lastUpdateTime = parseInt(lastUpdate, 10);
        const hoursSinceUpdate = (Date.now() - lastUpdateTime) / (1000 * 60 * 60);
        
        // Reset spots every 24 hours
        if (hoursSinceUpdate >= 24) {
          const newSpots = Math.floor(Math.random() * 4) + 5; // 5-8 spots
          localStorage.setItem('limited_spots', newSpots.toString());
          localStorage.setItem('limited_spots_update', Date.now().toString());
          return newSpots;
        }
        
        return storedSpots;
      }
      
      // Initialize with random spots between 5-8
      const initialSpots = Math.floor(Math.random() * 4) + 5;
      localStorage.setItem('limited_spots', initialSpots.toString());
      localStorage.setItem('limited_spots_update', Date.now().toString());
      return initialSpots;
    };

    setSpots(getSpots());

    // Randomly decrease spots occasionally (simulating purchases)
    const decreaseInterval = setInterval(() => {
      const shouldDecrease = Math.random() < 0.1; // 10% chance every 30 seconds
      if (shouldDecrease) {
        setSpots(prev => {
          const newSpots = Math.max(2, prev - 1); // Never go below 2
          localStorage.setItem('limited_spots', newSpots.toString());
          return newSpots;
        });
      }
    }, 30000);

    return () => clearInterval(decreaseInterval);
  }, []);

  const isUrgent = spots <= 4;

  return (
    <div className={`
      flex items-center justify-center gap-2 py-2 px-4 rounded-lg
      ${isUrgent 
        ? 'bg-primary/20 border border-primary/40 animate-pulse' 
        : 'bg-accent/20 border border-accent/40'
      }
    `}>
      {isUrgent ? (
        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-primary animate-shake" />
      ) : (
        <Users className="w-4 h-4 md:w-5 md:h-5 text-accent" />
      )}
      <span className={`
        font-bold text-sm md:text-base
        ${isUrgent ? 'text-primary' : 'text-accent'}
      `}>
        ¡Solo quedan <span className="text-lg md:text-xl">{spots}</span> cupos disponibles!
      </span>
      {isUrgent && (
        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-primary animate-shake" />
      )}
    </div>
  );
};

export default LimitedSpotsCounter;
