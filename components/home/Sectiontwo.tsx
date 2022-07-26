import { datacontext } from '../../context/store'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'


const Sectiontwo = ()=>{
    const { post } = datacontext()

    const aboutunaklodin = Object.values(post).filter((v: any) => {
        return v.slug === 'about-u-and-a-klodin'
    }).map((vl: any,k: any) =>(
        <div key={k}>
            <div>
                <h1>{vl.title}</h1>
                <div className="divider"></div>
                <PortableText value={vl.body} />
            </div>
        </div>
    ))

    const images = Object.values(post).filter((v: any) => {
        return v.cat_title === 'U & A Klodin'
    }).map((vl: any,k: any) =>(
        <div key={k}>
            <div className="unaklodinimg">
                <Image width="2" height="1" layout="responsive" src={vl.mainImage+''} alt="" />
            </div>
        </div>
    ))

    return (
        <section className="sec2 unaklodin">

        <div className="container">
            {aboutunaklodin}
        </div>

        <div className="container gap-2">
            {images}
        </div>

    </section>
    )
}

export default Sectiontwo