import {useEffect} from "react"

export default function Arrow({guestName} : {guestName : string}){
    useEffect (() => {
        const $icon = document.querySelector('.icon');
        const $arrow = document.querySelector('.arrow');
    
        const ArrowMove = () => {
            $arrow?.animate([
                {left: '0'},
                {left: '10px'},
                {left: '0'}
            ],{
                duration: 700,
                iterations: Infinity
            });
        }
        ArrowMove();
    }, [])
    
    return(
        <>
        <p id="pincha-aqui"> Hola {guestName} pincha aquí</p>
        <div className="icon">
            
            <div className="arrow"></div>
        </div>
        </>
    )
}