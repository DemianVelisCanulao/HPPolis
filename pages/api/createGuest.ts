import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

type guestProps = {
    name: string,
    is_coming: string
}

export default async function Handler(
    req: NextApiRequest,
    res: NextApiResponse
    
){
    try {
        
        const guest : guestProps = JSON.parse(req.body);
        
        if(req.method === 'POST'){
            if(!guest.name.length){
                return res.status(500).json({ message: 'Por favor inserta un nombre' })
            }
            try {
                
                const date = new Date();
                const data = await prisma.guests.create({
                    
                    data: {
                        name: guest.name,
                        date_confirmation: date,
                        is_coming: guest.is_coming == 'si' ? true : false,
                        invitados: 0
                    },
                })
                
                return res.status(200).json(data);
                //redirect('/positivo');
            } catch (error) {
                console.log(error);
                return res.status(500).json({message: error});
            }
        }
    } catch (error) {
        console.log('error 500 fuera');
        return res.status(500).json(error)
    }
}

