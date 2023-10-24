import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
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
    <div>ResourceCard</div>
  )
}

export default ResourceCard