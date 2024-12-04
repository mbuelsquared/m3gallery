import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/rIjgW6zdeTn7RaypHf5MvYgm9zKcZp7HFGLxfytuaBwsh5rO",
  "https://utfs.io/f/rIjgW6zdeTn77QlQF5XtCLpWlJcAh8aSksTIrw9bMvR3KGdy",
  "https://utfs.io/f/rIjgW6zdeTn7r5wrCTF6zdeTn7v6NGFclQgCxY8p90V2XAuK",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default function HomePage() {
  return (
    <main className="">

        <div className="flex flex-wrap gap-4">
          {[...mockImages, ...mockImages, ...mockImages,...mockImages].map((image) =>(
            <div key={image.id} className="w-48 p-4">
              <img src={image.url}/>


            </div>
          ))}
        </div>
    </main>
  );
}
