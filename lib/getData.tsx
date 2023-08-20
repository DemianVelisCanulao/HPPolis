// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hp-polis.vercel.app"
    : "http://localhost:3000";

interface Guest {
    // Define la estructura de un objeto Post
    id: number;
    name: string;
    is_coming: boolean;
    // ... otras propiedades
}
export async function getData(): Promise<Guest[]> {
    
    const res = await fetch(`${baseUrl}/api/getPosts`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log('Failed to fetch data')
    }
    
    return res.json()
    
}