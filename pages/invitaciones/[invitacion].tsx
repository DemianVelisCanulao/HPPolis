import { useRouter } from "next/router";
//import { notFound  } from "next/navigation";
import FormGuest from "@/app/Form";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hp-polis.vercel.app"
    : "http://localhost:3000";

const EntradaInvitacion = ({ fullName }: { fullName: string }) => {
    
    return (
        <>
            <FormGuest guestName = {fullName}/>
        </>
    )
} 

async function getData() {
    try {
        const res = await fetch(`${baseUrl}/api/getPosts`)
 
        if (!res.ok) {
          
        }
       
        return res.json()
    } catch (error) {
        console.error(error)
    }
   
}

export async function getServerSideProps(context:any) {
    
    const data : {name : string} [] = await getData()
    const confirmedsGuests = data.map((guest) => guest.name)
    
    const { query } = context;
    const guest2 = query.invitacion ?? "";
    const split_name = typeof guest2 === "string" ? guest2.split("-") : [];

    const fullName = `${split_name[0]} ${split_name[1] ?? ""} ${split_name[2] ?? ""}`;

    //Lista de invitados
    const GuestsList = [
        "Cami",
        "Benja",
        "Simon",
        "Amanda",
        "Bad Lucho",
        "Sbek",
        "Palo",
        "Aurorita",
        "Apo",
        "Amarantis",
        "Rayito",
        "Amapola",
        "Demian",
        "Guelita Nati",
        "Tata Ricardo",
        "Tio Pablo",
        "Marcela",
        "Ali",
        "Magda",
        "Papaya",
        "MamaCanelo",
        "Colomercio",
        "Joshe"
    ];
    
    //Si es que ya ha confirmado, se retorna a la pantalla de confirmación
    const isConfirmed = confirmedsGuests.some(confirmed => confirmed.toLowerCase().trim() == fullName.toLowerCase().trim());
    if (isConfirmed) {
        return {
            redirect: {
                destination: "/PositiveAnswer",
                permanent: false,
            },
        };
    }
    
    //Si es que es un invitado no se retorna al home
    const isGuest = GuestsList.some(guest => guest.toLowerCase().trim() == fullName.toLowerCase().trim());
    
    if (!isGuest) {
        return {
        redirect: {
            destination: "/",
            permanent: false,
        },
        };
    }

    return {
        props: {
        fullName,
        },
    };
  }

export default EntradaInvitacion