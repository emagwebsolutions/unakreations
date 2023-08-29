import client from '@/sanity/client.config';
import { groq } from 'next-sanity';

export async function GET(req: Request) {
  try{
  const ftch = await client.fetch(
    groq`
    *[_type == 'services']{
        _id,
        _createdAt,
        'img': mainImage.asset->url,
        'slug': slug.current,
        'cat': categories[0]->title,
        "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "...",
        body,
        title
    }
    `);
    return new Response(JSON.stringify(ftch));
  }
  catch(err){
    console.log(err)
  }
}