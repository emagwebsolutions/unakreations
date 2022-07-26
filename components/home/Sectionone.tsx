
import Link from 'next/link'
import { datacontext } from '../../context/store'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

const Sectionone = ()=>{

    const { post } = datacontext()


    const aboutunagrafix = Object.values(post).filter((v: any) => {
        return v.slug === 'about-u-and-a-grafix'
    }).map((vl: any,k: any) =>(
        <div key={k}>
          <h1>{vl.title}</h1>
          <div className="divider"></div>
          <div>
          <PortableText value={vl.body} />
          </div>
        </div>
    ))


    const largeimg = Object.values(post).filter((v: any) => {
        return v.slug === 'u-and-a-grafix-large-image'
    }).map((vl: any,k: any) =>(
        <div key={k}>
          <Image width="4" height="3" layout="responsive" src={vl.mainImage+''} alt="" />
          </div>
    ))


    const grafixbrands = Object.values(post).filter((v: any) => {
      return v.cat_title === 'Grafix Brands'
    }).map((vl: any,k: any) =>(
      <div key={k} className="brands">
        <picture>
        <Image width="4" height="3" layout="responsive" src={vl.mainImage+''} alt="" />
        </picture>
    
        <h4>{vl.title}</h4>
     </div>
    ))

   


    return (
        <section>

            <div className="container">
                <div className="sec1-caption">
                    {aboutunagrafix}
                </div>
            </div>


            <div className="container gap-2">

                <div>
                    <div className="flex gap-2">
                        {grafixbrands[0]}
                        {grafixbrands[1]}
                    </div>
                    <div className="flex gap-2">
                        {grafixbrands[2]}
                        {grafixbrands[3]}
                    </div>
                </div>
             


                <div>
                    <div className="big-ser-img">
                       {largeimg} 
                    </div>

                    <div className="serv-btns">
                                <div>
                                    <Link href="#">
                                        <a>
                                            <i className="fa fa-pencil fa-lg"></i> PORTFOLIO 
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <a>
                                        <i className="fa fa-gear fa-lg"></i>SERVICES
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="serv-btns">
                                <div>
                                    <Link href="#">
                                        <a>
                                        <i className="fa fa-book fa-lg"></i>GET QUOTE
                                        </a>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="#">
                                        <a>
                                            <i className="fa fa-envelope fa-lg"></i> CONTACT US   
                                        </a>
                                    </Link>
                                </div>

                            </div>
                </div>

            </div>



        </section>
    )
}

export default Sectionone