import { useEffect } from "react"
import { useState } from "react"

export const StarBackground = () => {
    const [stars, setStarts] = useState([])
    const [meteors, setMeteors] = useState([])
    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize=()=>{
            generateStars();
        }
        //ajustar la cantidad de estrellas segun el tamaño de la pantalla
        window.addEventListener("resize", handleResize)
        return()=> window.removeEventListener("resize", handleResize)
    }, [])


    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight) / 10000
        const newStars = []
        for (let index = 0; index < numberOfStars; index++) {
            newStars.push({
                id: index,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStarts(newStars)
    }
    const generateMeteors = () => {
        const numberOfMeteors = 4
        const newMeteors = []
        for (let index = 0; index < numberOfMeteors; index++) {
            newMeteors.push({
                id: index,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                animationDelay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 2,
            })
        }
        setMeteors(newMeteors)
    }
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 20 + "px",
                        height: meteor.size + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.animationDelay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}

        </div>
    )
}