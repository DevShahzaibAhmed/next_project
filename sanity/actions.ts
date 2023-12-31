import { groq } from "next-sanity";
import { Readclient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams{
    query: string;
    category: string;
    page:string;

}

export const getResources=async (params:GetResourcesParams)=> {
    const {query, category, page} = params;

    try {
        const resources = await Readclient.fetch(
            groq`${buildQuery({
                type:'resource',
                query,
                category,
                page:parseInt(page),
    })}
    {
        title,
        _id,
        downloadlink,
        "image":poster.asset->url,
        views,
        slug,
        category,
    }` 
    );
    return resources;
        
    }  catch (error) {
        console.log(error);
    }
}