import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Link from "next/link";
import Image from "next/image";

  
interface Props {
    id:string;
    title:string;
    image:string;
    downloadNumber:number;
    slug:string;
}


const ResourceCard = ({id, downloadNumber, title, image, slug}:
    Props) => {
  return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[365px]">
            <Link href={`/resource/${id}`}>

                <CardHeader>
                <div>
                    <Image 
                    src={image}
                    className="h-full rounded-md object-cover"
                    width={384}
                    height={440}
                    alt={title}
                 />
                </div>

                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
            </Link>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
          
  )
}

export default ResourceCard