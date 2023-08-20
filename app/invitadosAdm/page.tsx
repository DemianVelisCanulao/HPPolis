import { getData } from "@/lib/getData"
import { GetStaticProps } from 'next';
interface Guest {
    // Define la estructura de un objeto Post
    id: number;
    name: string;
    is_coming: boolean;
    // ... otras propiedades
} 

export const getStaticProps: GetStaticProps = async () =>  {
    //const posts = await getData();
    const data: Guest[] = await getData();
    return { props: { data } };
}
  
export default function Page({ data }: { data: Guest[] }){
    
    var i = 0
    return (
        <div>
            <table>
                <thead>
                    <th>Invitad@</th>
                    <th>¿Viene?</th>
                </thead>
                <tbody>
                    {data.map((guest) => (
                        <tr key={guest.id}>
                            <td>
                                {guest.name}
                            </td>
                            <td>
                                {!guest.is_coming ? 'No' : 'Si'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    )
}

