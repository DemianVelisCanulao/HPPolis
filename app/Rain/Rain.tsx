import { useEffect } from "react";
export default function Rain(){

    // number of drops created.
    var nbDrop = 100; 
    useEffect(() => {
        const rainElement = document.querySelector('.rain');
        // function to generate a random number range.
        const randRange = ( minNum:number, maxNum:number) => {
            return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        }
            
        // function to generate drops
        const createRain = () => {

            for( let i = 1; i < nbDrop;i++) {
                var dropLeft = randRange(0,1600);
                var dropTop = randRange(-1000,1400);

                const dropElement = document.createElement('div');
                dropElement.className = 'drop';
                dropElement.id = 'drop' + i;
                // Establecer los estilos
                dropElement.style.left = dropLeft + 'px';
                dropElement.style.top = dropTop + 'px';

                // Agregar el elemento de gota al elemento con clase 'rain'
                
                rainElement?.appendChild(dropElement);
            }

        }
        createRain();
    }, [nbDrop]);
    

     return <section className="rain"></section>
     
}