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


export default EntradaInvitacion