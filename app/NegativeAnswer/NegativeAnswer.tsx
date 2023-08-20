import Image from "next/image";
import Rain from "../Rain/Rain";
export default function NegativeAnswer(){

    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
    }

    
    return (
        <>
            <Rain/> 
            <div className="answer-container">
                <p className="p-big">Está bien; lo entiendo.</p>
                <p className="p-big">Pero igual no te olvides de mi regalo.</p> 
                <Image
                src="/../public/sad-answer.gif"
                width={300}
                height={300}
                alt="Amapola troste"
                priority={true}
                style={imageStyle}
                />
            </div>
        
        </>
    )

    
}