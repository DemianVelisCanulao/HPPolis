"use client"
import { useEffect, useState } from 'react';


const baseUrl =process.env.NODE_ENV === "production" ? "https://hp-polis.vercel.app" : "http://localhost:3000";

async function getData() {
  const res = await fetch(`${baseUrl}/api/getPosts`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Page() {
  const [data, setData] = useState<{ id: number; name: string; is_coming: boolean }[]>([]); // Inicialmente, data es una matriz vacía
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
        setLoading(false); // Finaliza la carga una vez que se reciben los datos
      } catch (error) {
        console.error(error);
        setLoading(false); // Finaliza la carga en caso de error
        // Handle error state here if needed
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Invitad@</th>
              <th>¿Viene?</th>
            </tr>
          </thead>
          <tbody>
            {data.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{guest.is_coming ? 'Si' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}