import client from '@/sanity/client.config';
import { groq } from 'next-sanity';

export async function GET(req: Request) {
  try{
  const ftch = await client.fetch(
    groq`
    *[_type == 'ourteam']{
        _id,
        _createdAt,
        'img': mainImage.asset->url,
        'slug': slug.current,
        'cat': categories[0]->title,
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
