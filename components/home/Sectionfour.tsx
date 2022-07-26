import { datacontext } from '../../context/store'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import Link from 'next/link'

const Sectionfour = ()=>{
    const { post } = datacontext()

    const blogpost = Object.values(post).filter((v: any) => {
        return v.cat_title === 'Blog'
      }).map((vl: any,k: any) =>(
        <div key={k}>

                <div className="blog">
                    <picture>
                    <Image width="4" height="4" layout="responsive" src={vl.mainImage+''} alt="" />
                    </picture>
                    <div>
                        <span>{vl.title}</span>
                        <h3>Colour Theory</h3>
                       <PortableText value={vl.body} />
                        <div>
                            <span>By UNA Kreations </span> <span>2 Days ago</span>
                        </div>
                    </div>
                </div>
       </div>
      ))

    

    return (
        <section className="sec3 blogpostwrapper">

        <h1>Our Blog</h1>
        <div className="divider"></div>

        <div className="container gap-3">
            {blogpost}
        </div>

        <Link href="/">
           <a>VIEW ALL</a> 
        </Link>

    </section>
    )
}

export default Sectionfour