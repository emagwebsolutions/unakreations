import Nav from './nav/Nav'
import Footer from './footer/Footer'
import Meta from './Meta'


type child = {
    children: React.ReactNode
}

const Layout = ( {children}: child)=>{
    
    return (
        <>
        <Meta title="U & A Kreations" />
        <Nav />
        <main>
        {children}
        </main>
        <Footer />
        </>
    )
}

export default Layout