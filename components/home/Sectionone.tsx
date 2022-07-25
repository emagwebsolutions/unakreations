
import Link from 'next/link'

const Sectionone = ()=>{
    return (
        <section>
            <div className="container">

            <div className="rw sec1-caption">
                <div>
                    <h1>U & A Grafix</h1>
                    <div className="divider"></div>
                    <p>
                    We have a Team of young and dynamic professionals committed to providing you with excellent services. We are understanding, unique and multifaceted in ideas.
                    </p>
                </div>
            </div>

                <div className="rw">
                    <div>

                        <div className="rw">
                            <div>
                                <div className="sbx">
                                <picture>
                                    <img src="/letterhead.jpg" alt="" />
                                </picture>
                                <h4>LETTERHEADS</h4>
                                </div>
                            </div>
                            <div>
                            <div className="sbx">
                                <picture>
                                    <img src="/branding.jpeg" alt="" />
                                </picture>
                                <h4>BRANDING</h4>
                            </div>
                            </div>
                        </div>


                        <div className="rw">
                            <div className="sbx">
                                <picture>
                                    <img src="/businesscards.jpg" alt="" />
                                </picture>
                                <h4>BUSINESS CARDS</h4>
                            </div>
                            <div className="sbx">
                                <picture>
                                    <img src="/souvenirs.jpg" alt="" />
                                </picture>
                                <h4>SOUVENIRS</h4>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div>
                            <picture className="big-ser-img">
                                <img src="/signage.jpg" alt="" />
                            </picture>
                        </div>
                        <div>
                            <div className="rw serv-btns">
                                <div>
                                    <Link href="#">
                                        <a>
                                            <i className="fa fa-pencil fa-lg"></i> <h4>PORTFOLIO</h4> 
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <a>
                                        <i className="fa fa-gear fa-lg"></i> <h4>SERVICES</h4>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="rw serv-btns">
                                <div>
                                    <Link href="#">
                                        <a>
                                        <i className="fa fa-book fa-lg"></i> <h4>GET QUOTE</h4>
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <a>
                                            <i className="fa fa-envelope fa-lg"></i> <h4>CONTACT US</h4>    
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Sectionone


