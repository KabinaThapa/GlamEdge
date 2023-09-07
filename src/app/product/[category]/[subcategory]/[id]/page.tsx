import Productslist from '@/components/productslist/productslist'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({params}:{params :{id:string, category:string, subcategory:string}}):Promise<Metadata>{
  const categoryTitle=`${params.category}'s ${params.subcategory}-${params.id} | GlamEdge`.toUpperCase()
  return{
    title:categoryTitle
  }
}
const page = ({ params }: { params: { category: string, subcategory:string, id:string} }) => {
  
  return (
    <div>
      <Productslist subcategory={params.subcategory} category={params.category} id={params.id}/>
    </div>
  )
}

export default page