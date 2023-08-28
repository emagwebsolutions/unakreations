import client from '@/sanity/client.config';
import { groq } from 'next-sanity';

export async function GET(req: Request) {
  try{
  const ftch = await client.fetch(
    groq`
    *[_type == 'slider']{
        _id,
        _createdAt,
        'img': mainImage.asset->url,
        'slug': slug.current,
        title
    }
    `);
    return new Response(JSON.stringify(ftch));
  }
  catch(err){
    console.log(`SLIDER ${err}`)
  }
}