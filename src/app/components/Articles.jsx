import Image from "next/image";
import article1 from "../../../public/assests/Rectangle 31.png";
import article2 from "../../../public/assests/Rectangle 32.png";
import article3 from "../../../public/assests/Rectangle 33.png";
import article4 from "../../../public/assests/Rectangle 34.png";

const Articles = () => {
  const array1 = [article1, article2, article3, article4, article3, article1];

  return (
    <main className="my-20 mx-40">
      <h1 className="text-4xl font-bold text-center mb-10">Articles</h1>
      <div className="grid grid-cols-3 gap-2 items-start">
        {array1.map((val, ind) => {
          return (
            <div className="relative w-fit" key={ind}>
              <div className="aspect-w-3 aspect-h-8">
                <Image
                  src={val}
                  alt="products"
                  className="object-cover img-art"
                />
              </div>
              <div className="text-center absolute bottom-0 left-0 right-0 pb-16 pt-5 bg-neutral-900 bg-opacity-50">
                <h1 className="font-semibold text-4xl text-white">
                  Blog title
                </h1>
                <p className="text-xl mt-5 text-white">Blog subtitle</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Articles;
