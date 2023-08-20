import { useRouter } from "next/router";
//import { notFound  } from "next/navigation";
import FormGuest from "@/app/Form";

const EntradaInvitacion = ({ fullName }: { fullName: string }) => {
    
    return (
        <>
            <FormGuest guestName = {fullName}/>
        </>
    )
} 

async function getData() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
 
        if (!res.ok) {
          
        }
       
        return res.json()
    } catch (error) {
        console.error(error)
    }
   
}

export async function getServerSideProps(context:any) {
    console.log("BASE_URL",process.env.BASE_URL)
    const data : {name : string} [] = await getData()
    const nameGuests = data.map((guest) => guest.name)
    
    const { query } = context;
    const guest2 = query.invitacion ?? "";
    const split_name = typeof guest2 === "string" ? guest2.split("-") : [];

    const fullName = `${split_name[0]} ${split_name[1] ?? ""} ${split_name[2] ?? ""}`;
    
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
    ];
    const nameGuestsSet = new Set(nameGuests);
    if (nameGuestsSet.has(fullName)) {
        return {
            redirect: {
                destination: "/PositiveAnswer",
                permanent: false,
            },
        };
    }
    
    const isGuest = GuestsList.includes(guest2);
    
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