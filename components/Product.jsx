import ProductButton from "./ProductButton"


const Product = ({id,title,price}) => {
  return (
    <div className=" border border-red-600 my-3 justify-between text-lg flex items-center">
        <h4 className="flex-1">{title}</h4>
        <p>{price}</p>
        <ProductButton id={id}/>
    </div>
  )
}

export default Product