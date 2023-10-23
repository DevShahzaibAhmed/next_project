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
                type: 'resource',
                

            })}`
        )
        
    }  catch (err) {
    }
}