import Image from "next/image";
import Product from "@/components/Product";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export async function generateStaticParams(){
    const res = await fetch("https://dummyjson.com/products?limit=10&skip=112&select=title,price")
    const data = await res.json()
    

    return  data.products.map((product)=>({
        id:product.id.toString(),
    }))
}
//sigle product show
async function getProduct(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json()
    return data
}

const ProductPage = async ({params}) => {
    const product = await getProduct(params.id)
    console.log(product)
  return (
    <MaxWidthWrapper>

    <div>
        <Product title={product.title} price={product.price}/>
        <div className=" grid sm:grid-cols-3 lg:grid-cols-4">
            {product.images.map((image,index)=>(
                <img key={index} src={image} alt="product-img" />
            ))}
        </div>
    </div>
    </MaxWidthWrapper>
  )
}

export default ProductPage