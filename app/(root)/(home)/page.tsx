import ResourceCard from '@/components/ResourceCard'
import Filters from '@/components/ui/Filters'
import Header from '@/components/ui/Header'
import Searchform from '@/components/ui/Searchform'
import { getResources } from '@/sanity/actions'
import { title } from 'process'
import React from 'react'

interface Props{
  searchParams:{[key: string]: string|undefined};
  title?:string;

}

const page = async({searchParams}:Props) => {
    const resources=await getResources({
      query: searchParams?.query||'',
      category: searchParams?.category||'',
      page: '1'
    })

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">

      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white ">Javascript Mastery Resources </h1>
        </div>
        <Searchform/>
      </section>
      <Filters/>

      {(searchParams?.query||searchParams?.category)&&(
      
            <section className="w-full flex-center mt-6 flex-col sm:mt-20 ">
              <Header
             title= {title ||"Resources"}
              query={searchParams?.query||''}
              category={searchParams?.category||''}

              />
              <div className="flex w-full mt-12 flex-wrap justify-center gap-16 sm:justify-start">
                {
                  resources?.length>0 ? (
                    resources.map((resource:any)=>(
                      <ResourceCard
                      key={resource.id}
                      title={resource.title}
                      id={resource.id}
                      image={resource.image}
                      downloadNumber={resource.views}
                      />
                    )
                  )
                  ):(
                    <p className="body-regular text-white-400 ">
                      No Resources Found
                    </p>
                  )}

              </div>

            </section>
      )}
    </main>
  )
}

export default page