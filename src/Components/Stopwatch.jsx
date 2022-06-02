import { useEffect, useState } from "react";

const Stopwatch = ({ start }) => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setTime({
            ...time,
            hours: start.hours,
            minutes: start.minutes
        })
    }, [start]);

    useEffect(() => {
        setTimeout(() => {
            if (time.minutes === 59 && time.seconds === 59)
                setTime({
                    hours: time.hours + 1,
                    minutes: 0,
                    seconds: 0
                })
            else
                if (time.seconds !== 59)
                    setTime({
                        ...time,
                        seconds: time.seconds + 1
                    })
                else
                    setTime({
                        ...time,
                        minutes: time.minutes + 1,
                        seconds: 0
                    })
        }, 1000)
    }, [time])

    return (
        <>
            <p className="stopwatch">
                {
                    `Tiempo corrido: 
                    ${time.hours.toString().padStart(2, 0)}:${time.minutes.toString().padStart(2, 0)}:${time.seconds.toString().padStart(2, 0)}`
                }
            </p>
        </>
    )
}

export default Stopwatch;