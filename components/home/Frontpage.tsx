import Slider from './Slider'
import Sectionone from './Sectionone'
import Sectiontwo from './Sectiontwo'
import Sectionthree from './Sectionthree'

const Frontpage = ( {data}: {data: any})=>{

    const arr = data.filter( (v: any) => v.catTitle == 'Blog')

    console.log(arr)
    
    return (
        <div className="home">
        <Slider />
        <Sectionone />
        <Sectiontwo />
        <Sectionthree />
        </div>
    )
}

export default Frontpage