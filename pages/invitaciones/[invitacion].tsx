import { useRouter } from "next/router";
//import { notFound  } from "next/navigation";
import FormGuest from "@/app/Form";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hp-polis.vercel.app"
    : "http://localhost:3000";

const EntradaInvitacion = () => {
    const fullName = ""
    return (
        <>
            <FormGuest guestName = {fullName}/>
        </>
    )
} 


export default EntradaInvitacion