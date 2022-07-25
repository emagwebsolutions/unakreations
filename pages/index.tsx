import type { NextPage } from 'next'
import Frontpage from '../components/home/Frontpage'
import { useState,useEffect } from 'react'
import imageUrlBuilder  from '@sanity/image-url'

const Home: NextPage = ({ data }: any) => {

  const [ getData,setData ] = useState([])

  const builder = imageUrlBuilder({
    projectId: '4mr7epve',
    dataset: 'production'
  })

  useEffect(() => {
    setData(
      data.map( (v: any) => {
        return {
          ...v,
          mainImage: builder.image(v.mainImage)
        }

      })

    )
  },[data])

  if(!getData){
    setData([])
  }

  return <Frontpage data={getData} />
}


export const getServerSideProps = async () => {

  const query = encodeURIComponent(`*[_type == "post"]{
    title,
    body,
    "catTitle": categories[]->title
  }`)
  const url = `https://4mr7epve.api.sanity.io/v1/data/query/production?query=${query}`
  const data = await fetch(url).then( data => data.json())

  if(!data && !data.result) {
    return {
      props: {
        data: []
      }
    }
  }
  else{
    return {
      props: {
        data: data.result
      }
    }

  }

}

export default Home
