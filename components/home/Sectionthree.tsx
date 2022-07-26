import { datacontext } from '../../context/store'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

const Sectionthree = ()=>{
    const { post } = datacontext()

    const testimonials = Object.values(post).filter((v: any) => {
        return v.cat_title === 'Testimonials'
      }).map((vl: any,k: any) =>(
        <div key={k}>
            <div className="testm-row">
                <div className="img-test">
                <Image width="4" height="4" layout="responsive" src={vl.mainImage+''} alt="" />
                </div>
                <h4>{vl.title}</h4>
                <div className="quote">
                    <i className='fa fa-quote-left'></i>
                    <PortableText value={vl.body} />
                    <i className='fa fa-quote-right'></i>
                </div>
            </div>
       </div>
      ))

    return (
        <section className="sec3 testimonials">
            <h1>Testimonials</h1>
            <div className="divider"></div>
            <div className="container gap-2">
                {testimonials}
            </div>
        </section>
    )
}

export default Sectionthree