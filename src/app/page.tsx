import Link from "next/link";

import { db } from "~/server/db";;





export default async function HomePage() {

  const images = await db.query.images.findMany({

    orderBy:(model, {desc}) => desc(model.id)
  });



  return (
    <main className="">

        <div className="flex flex-wrap gap-4">
          
          {[...images, ...images, ...images, ...images].map((image, index) =>(
            <div key={image.id + "-" + index} className="w-48 p-4 flex-col">
              <img src={image.url}/>
              <div className="text-center">{image.name}</div>


            </div>
          ))}
        </div>
    </main>
  );
}
