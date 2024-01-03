import client from '@/sanity/client.config';
import { groq } from 'next-sanity';

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET(req: Request) {
  try {
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
        twitter,
        facebook,
        instagram
    }
    `
    );
    return new Response(JSON.stringify(ftch));
  } catch (err) {
    console.log(err);
  }
}
