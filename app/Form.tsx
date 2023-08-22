'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./radioBtn.scss"
import Image from 'next/image'
import PositiveAnswer from "./PositiveAnswer/PositiveAnswer";
import NegativeAnswer from "./NegativeAnswer/NegativeAnswer";
import Arrow from "./Arrow/Arrow";
import Gift from "./Gift/gift";
import Confeti from "./Confeti/Confeti";

export default function FormGuest({guestName} : any){
    
    const [answer, setAnswer] = useState();
    const GuestsListEspecial = [
        "Guelita Nati",
        "Tata Ricardo",
        "Tio Pablo",
        "Marcela",
        "Ali",
        "Magda",
        "Papaya",
        "MamaCanelo",
        "Miguel Angel"
    ];
    const router = useRouter();
    async function submitGuest(e: React.FormEvent){
        e.preventDefault();
        setIsLoading(true)
        const data = await fetch(`/api/createGuest`, {
            method: 'POST',
            body: JSON.stringify({'name': guestName,  'is_coming': answer})
        })

        const res = await data.json();
        if(res){
            setShowForm(true);
            setIsLoading(false)
        }

    }
    
    const RadioInput = ({label, value, checked, setter, id} : any) => {
        var forInput = value == "si" ? "toggle-on" : "toggle-off";
        var classInput = value == "si" ? "toggle toggle-left" : "toggle toggle-right"
        return (
            <>
                <input id={id} className={classInput} name="toggle" type="radio" checked={checked == value}
                onChange={() => setter(value)} />
                <label htmlFor={forInput} className="btn">{label}</label>
            </>
        );
    };

    const [isLoading, setIsLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {isLoading ? (
                <p>Cargando...</p>
            ) : 
                (!showForm ? 
                    <>
                    <Confeti/>
                    <div className="form-container">
                            
                        <div className="cloud" id="cloud">
                            <form action="" onSubmit={submitGuest} id="form-confirm" className="hidden-form confirm-form">
                            
                                <div className="form-title">
                                    
                                    <h2 className="invitation-message"> Te invito a mi Pumpleaños</h2>
                                    {GuestsListEspecial.some(confirmed => confirmed.toLowerCase().trim() == guestName.toLowerCase().trim())
                                        ? 
                                        <p className="invitation-message"> El día 24/08 a las 18:30 hrs</p> 
                                        :
                                        <p className="invitation-message"> El día 26/08 a las 21:00 hrs</p>
                                    }
                                    
                                    <Image
                                    src={'/clown-2.png'}
                                    alt="Clown 1"
                                    width={125}
                                    height={125}
                                    />
                                </div>   
                            
                                <input 
                                    type="hidden" 
                                    value = {guestName}
                                />    
                                <div className="form-body">
                                    <legend>¿Vendrás?</legend>

                                    <RadioInput label="Si :)" value="si" active="on" checked={answer} setter={setAnswer} id="toggle-on"/>
                                    
                                    <RadioInput label="No :C" value="no" active="off" checked={answer} setter={setAnswer} id="toggle-off"/>
                                    <br/>
                                    <button className="confirm-button" type="submit">Confirmar</button>  
                                </div>
                            </form>
                            <Arrow guestName={guestName} />
                            <Gift/>
                        </div>
                        
                    </div> 
                    
                    </>
                    : null
                )
            }
            

            {answer === 'si' && showForm? (
                    <PositiveAnswer/>
                ) : answer === 'no' && showForm? (
                    <NegativeAnswer/>
                ) : null
            }
            
        </>
    )
}