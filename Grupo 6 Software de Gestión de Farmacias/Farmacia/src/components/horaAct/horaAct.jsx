import { useEffect, useState } from "react";
import "./horaAct.css"

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Función para actualizar la hora actual
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    // Establecer un intervalo para actualizar la hora cada segundo
    const intervalId = setInterval(updateClock, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    <div className="time">
        <p className="hora">
        {currentTime.toLocaleTimeString()}
        </p>
        <p className="fecha">
        {currentTime.toDateString()}
        </p>
    </div>
    
    
    </>
    
  );
};
