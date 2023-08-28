import client from '@/sanity/client.config';
import { groq } from 'next-sanity';

export async function GET(req: Request) {
  try{
  const ftch = await client.fetch(
    groq`
    *[_type == 'contacts']{
        _id,
        _createdAt,
        email,
        mobile1,
        mobile2,
        gpsaddress,
        officelocation,
        googlemap,
        facebook,
        twitter,
        instagram
    }
    `);
    return new Response(JSON.stringify(ftch));
  }
  catch(err){
    console.log(err)
  }
}
