import '../radioBtn.scss'
import Image from 'next/image'
export default function Page(){

    const polaImage = {
        borderRadius: '30%',
        border: '1px solid #fff',
    }
    return(
        <div className="answer-container">
            <h1 className='home-text'>¡Muchas gracias por responder!.</h1>
            <Image
                src="/../public/Pola-ok.jpg"
                width={300}
                height={300}
                alt="Amapola Okis"
                priority={true}
                style={polaImage}
            />
        </div>
    )
}