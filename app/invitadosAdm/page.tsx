import { getData } from "@/lib/getData"

export default async function Page(){
    
    const data: {id:number, name:string, is_coming:boolean}[]= await getData()

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