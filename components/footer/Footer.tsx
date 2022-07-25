import Link  from 'next/link'

const Footer = ()=>{
    return (
        <footer>
            <div>
            <div>
                <i className="fa fa-mobile fa-lg"></i> 
                <h4>
                    +233 3220 48605/ +233 576 705880/ +233 242 208113
                </h4>
            </div>
            <div>
                <i className="fa fa-envelope fa-lg"></i> <h4>info@unakreations.com</h4>
            </div>
            <div>
                <i className="fa fa-map-marker fa-lg"></i> 
                <h4>Kumasi -Ghana</h4>
            </div>
            <div>
                <Link href="https://www.facebook.com">
                    <a>
                    <i className="fa fa-facebook fa-lg"></i>
                    </a>
                </Link>
                <Link href="https://www.twitter.com">
                    <a>
                    <i className="fa fa-twitter fa-lg"></i>
                    </a>
                </Link>
                <Link href="https://www.instagram.com">
                    <a>
                    <i className="fa fa-instagram fa-lg"></i>
                    </a>
                </Link>
            </div>
            <div>
            © 2022 UNA KREATIONS. All rights reserved.
            </div>
            </div>
        </footer>
    )
}

export default Footer
