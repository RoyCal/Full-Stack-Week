import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";
import ProductDetails from "./components/product-details";

interface ProductPageProps {
    params: Promise<{ slug: string; productid: string }>;
}

const ProductPage = async ({params}: ProductPageProps) => {
    const { slug, productid } = await params;
    const product = await db.product.findUnique({where: {id: productid}, include: {restaurant: {select: {name: true, avatarImageUrl: true, slug: true}}}});

    if(!product){
        return notFound
    }

    if(product.restaurant.slug !== slug){
        return notFound
    }

    return ( 
        <div className="flex h-full flex-col">
            <ProductHeader product={product}/>
            <ProductDetails product={product}/>
        </div>
    );
}
 
export default ProductPage;