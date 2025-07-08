import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
  const { shorturl } = await params
   const client = await clientPromise
    const db = client.db('bitlinks')
    const collection  = db.collection('links')

    const doc  = await collection.findOne({shortUrl: shorturl})
    // console.log(doc)
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
  return <div>My Post: {shorturl}</div>
}