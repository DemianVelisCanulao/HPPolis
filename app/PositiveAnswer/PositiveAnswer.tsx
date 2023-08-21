import Image from "next/image"

export default function PositiveAnswer(){
    const sadImageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
        
    }
    const image1Style = {
        top: '0',
        left: '0',
        
    }

    const image2Style = {
        bottom: '0',
        right: '0',
        
    }
    return (
        
        <div className="answer-container">
             <Image
            src="/car_clowns.png"
            width={100}
            height={100}
            alt="Amapola feliz"
            priority={true}
            style={image1Style}
            />
            <div className="answer-paragraph-container">
                <p className="answer-paragraph">¡GENIAL!, entonces te espero en</p>
            </div>
            
            
            <Image
            src="/happy-answer.gif"
            width={300}
            height={300}
            alt="Amapola feliz"
            priority={true}
            style={sadImageStyle}
            />

            <div className="answer-paragraph-container">
                <p className="answer-paragraph">Monseñor Eyzaguirre 245</p>
                <p className="answer-paragraph">No olvides mi regalo :P</p>
            </div>
            <Image
            src="/cake_clown.png"
            width={100}
            height={100}
            alt="Amapola feliz"
            priority={true}
            style={image2Style}
            />
        </div>
            
    )
}