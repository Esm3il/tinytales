import Image from "next/image";

const ProductNav = () => {
    return (
        <div className="product-details">
            <p className="title2medium">Home</p>
            <Image src={"/icons/arrow-right.svg"} alt="arrow-right" width={24} height={24}/>
            <p className="title2medium">Our Category</p>
            <Image src={"/icons/arrow-right.svg"} alt="arrow-right" width={24} height={24}/>
            <p className="title2medium text-text-black-200">Product Details</p>
        </div>
    );
}
 
export default ProductNav;