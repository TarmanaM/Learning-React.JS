import { Button5 } from "../Elements/Buttons/Button";
import { CardProduct } from "../Fragments/ProductCard";

const productdata = [
  {
    id: 1,
    name: "gracia1",
    price: "Rp. 50.000",
    image: "/images/gracia1.jpg",
    description:
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus neque, accusamus ullam assumenda veritatis,`,
  },
  {
    id: 2,
    name: "grax",
    price: "Rp. 50.022",
    image: "/images/gracia1.jpg",
    description:
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus neque, accusamus ullam assumenda veritatis,`,
  },
  
];
const ProductPage = () => {
  return (
    <div className="flex justify-center text-center   min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold mb-3 text-black">Product Page</h1>

      <div className="flex justify-center md:grid-col-4">
        
        {productdata.map((product) => (
            <CardProduct size="w-1/4">
            <CardProduct.Header>
              <p>{product.name}</p>
            </CardProduct.Header>
            <CardProduct.Body>
              <div className="grid place-items-center h-max-1/2">
                <img
                  src={product.image}
                  className="p-3 w-1/2"
                  alt="product not found"
                />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight ">
                    {product.name}
                  </h5>
                  <p className=" text-m">
                    {product.description}
                  </p>
                </div>
              </div>
            </CardProduct.Body>
            <CardProduct.Footer>
              <div className="w-full bg-white flex items-center justify-between gap-2 grid-col-2 px-4">
                <span className=" font-bold text-xl text-green-600 ">
                  {product.price}
                </span>
                <Button5 size="w-full">Add To Chart</Button5>
              </div>
            </CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

export { ProductPage };
