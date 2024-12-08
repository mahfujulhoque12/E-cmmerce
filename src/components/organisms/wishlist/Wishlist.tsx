import CardTitle from "@/components/atoms/CardTitle";
import WishlistCom from "@/components/molecules/wishlist/WishlistCom";

const Wishlist = () =>{
    return (
        <div>
            <CardTitle className="lg:text-3xl font-bold">Wishlist</CardTitle>
            <WishlistCom/>
        </div>
    )
}

export default Wishlist;