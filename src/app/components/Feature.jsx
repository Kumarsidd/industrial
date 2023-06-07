import Image from "next/image";
import img1 from "../../../public/assests/Rectangle 19_3.png";
import img2 from "../../../public/assests/Rectangle 19_4.png";
import img3 from "../../../public/assests/Rectangle 19_5.png";
import prod1 from "../../../public/assests/image 7.png";
import prod2 from "../../../public/assests/image 4.png";
import prod3 from "../../../public/assests/image 5.png";
import prod4 from "../../../public/assests/image 6.png";
import prod5 from "../../../public/assests/image 3.png";
import "./index.css";

const Feature = () => {
  const array1 = [img1, img2, img3];
  const array2 = [prod5, prod2, prod3, prod4];
  return (
    <main className="mt-20">
      <div className="content">
        <h1 className="text-3xl font-bold text-center mb-10">
          Featured Content
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center space-x-20">
          {array1.map((value, index) => {
            return (
              <div className="text-center" key={index}>
                <Image src={value} alt="content-1" className="image-feature" />
                <div className="text mt-10">
                  <h1 className="font-bold text-3xl">Blog title</h1>
                  <p>Blog subtitle</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 mx-40">
        <div className="products">
          <h1 className="text-3xl font-bold text-center mb-10">
            Featured Products
          </h1>
          <div className="bg-gray-300 flex justify-center relative">
            <div className="flex">
              <Image src={prod1} alt="product" />
            </div>
            <div className="text absolute bottom-3 left-3">
              <h1 className="font-bold text-2xl">Blog title</h1>
              <p>Blog subtitle</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10">
            {array2.map((value, index) => (
              <div className="text-center" key={index}>
                <div className="bg-gray-300 flex items-center justify-center">
                  <Image
                    src={value}
                    alt="products"
                    className="object-contain w-30 h-40"
                  />
                </div>
                <div className="text mt-10">
                  <h1 className="font-bold text-2xl">Blog title</h1>
                  <p>Blog subtitle</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature;
