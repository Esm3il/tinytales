import Navbar from "@/components/Navbar";
import Image from "next/image";
import ProductNav from "@/components/ProductNav";
import ProductDetails from "@/components/ProductDetails";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-[12.0625rem] bg-Section-gray flex items-center justify-center overflow-hidden relative">
        <h2 >Product Details</h2>
        <p className="absolute font-bold text-black text-[5rem] opacity-5 text-transparent [-webkit-text-stroke:1px_black]">Product Details</p>
        <Image src={"/3d-vertical-background-with-abstract-style.jpg"} alt="background-decor"
        width={800} height={354} className="absolute opacity-5 rotate-270 object-cover translate-y-[-0.5rem]"/>
      </section>
      <ProductNav/>
      <ProductDetails
    </main>
  );
}
