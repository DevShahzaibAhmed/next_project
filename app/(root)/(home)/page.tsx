import ResourceCard from '@/components/ResourceCard'
import Filters from '@/components/ui/Filters'
import Searchform from '@/components/ui/Searchform'
import { getResources } from '@/sanity/actions'
import React from 'react'

const page = async() => {
    const resources=await getResources({
      query: '',
      category: '',
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

      <section className="w-full flex-center mt-6 flex-col sm:mt-20 ">
        Header

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
                slug={resource.id}
                
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
    </main>
  )
}

export default page