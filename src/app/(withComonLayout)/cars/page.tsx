import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

const AllCardPage = async () => {
  // const router = useRouter()
  const res = await fetch(`${process.env.serverUrl}/cars?limit=200`, {
    next: {
      tags: ["cars"],
    },
  });
  const { data } = await res.json();
  return (
    <div>
      <p className="text-center mt-6 mb-14">All Cars</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data?.map((item: any) => (
          <Card key={item._id} className="w-full h-[300px] ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {" "}
                rating: {item.rating}
              </p>
              <h4 className="text-white font-extrabold text-2xl">
                {item.name}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={item.image}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white font-bold text-tiny">
                  brand: {item.brand}
                </p>
                <p className="text-white text-tiny">Color: {item.color}</p>
              </div>
              <Link href={`cars/${item._id}`}>View Details</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCardPage;
