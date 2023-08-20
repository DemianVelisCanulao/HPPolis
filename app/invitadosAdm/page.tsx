
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000"
    : "http://localhost:3000";

async function getData() {
    const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log('Failed to fetch data')
    }
    
    return res.json()
}

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