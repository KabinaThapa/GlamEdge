import {Subcategorylist} from '@/components/subcategorylist/subcategorylist'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({params}:{params :{category:string, subcategory:string}}):Promise<Metadata>{
  const categoryTitle=`${params.category}'s ${params.subcategory}| GlamEdge`.toUpperCase()
  return{
    title:categoryTitle
  }
}
const page = ({ params }: { params: { category: string, subcategory:string} }) => {
  
  return (
    <div>
      <Subcategorylist subcategory={params.subcategory} category={params.category} />
    </div>
  )
}

export default page