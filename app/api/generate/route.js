import shorten from "@/app/shorten/page"
import clientPromise from "@/lib/mongodb"
import { connection } from "next/server"

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db('bitlinks')
    const collection  = db.collection('links')

    // check if the link already exists
    const doc  = await collection.findOne({shortUrl: body.shortUrl})
    console.log(doc)
    if(doc){
        return Response.json({ success:false, error:true , message: 'url already exists'})
    }

   const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl
   })
   

  return Response.json({ success:true, error:false , message: 'url generated successfully' })
}