import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
    params: Promise<{ slug: string; productid: string }>;
}

const ProductPage = async ({params}: ProductPageProps) => {
    const { slug, productid } = await params;
    const product = await db.product.findUnique({where: {id: productid}})
    if(!product){
        return notFound
    }

    return ( 
        <>
        <ProductHeader product={product}/>
        <h1>Product page</h1>
        {slug}
        {productid}
        </>
    );
}
 
export default ProductPage;