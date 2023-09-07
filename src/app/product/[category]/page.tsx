import Categorylist from '@/components/categorylist/categorylist'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({params}:{params :{category:string}}):Promise<Metadata>{
  const categoryTitle=`${params.category}'s category | GlamEdge`.toUpperCase()
  return{
    title:categoryTitle
  }
}
const page = ({ params }: { params: { category: string} }) => {
  
  return (
    <div>
      <Categorylist category={params.category}/>
    </div>
  )
}

export default page