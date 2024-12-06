import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

import { db } from "~/server/db";;


async function  Images() {
  const images = await db.query.images.findMany({

    orderBy:(model, {desc}) => desc(model.id)
  });


  return ( <div className="flex flex-wrap gap-4">
          
  {[...images, ...images, ...images, ...images].map((image, index) =>(
    <div key={image.id + "-" + index} className="w-48 p-4 flex-col">
      <img src={image.url}/>
      <div className="text-center">{image.name}</div>


    </div>
  ))}
</div>);

}


export default async function HomePage() {

  



  return (
    <main className="">

      <SignedOut>
        <div className="w-full h-full text-2xl text-center"> Please sign in above to see more</div> 
      </SignedOut>

      <SignedIn>
        <Images/>
      </SignedIn>

        
    </main>
  );
}
