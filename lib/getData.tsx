// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hp-polis.vercel.app"
    : "http://localhost:3000";

export async function getData() {
    
    const res = await fetch(`${baseUrl}/api/getPosts`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log('Failed to fetch data')
    }
    
    return res.json()
    
}