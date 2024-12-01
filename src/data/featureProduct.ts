import image1 from "/public/feature-products/bed1.png";
import image2 from "/public/feature-products/bed2.png";
import image3 from "/public/feature-products/bed3.png";
import image4 from "/public/feature-products/bed4.png";
import image5 from "/public/feature-products/bed5.png";
import image6 from "/public/feature-products/kid1.png";
import image7 from "/public/feature-products/kid3.png";
import image8 from "/public/feature-products/chair1.png";
import image9 from "/public/feature-products/chair2.png";
import image10 from "/public/feature-products/light1.png";
import image11 from "/public/feature-products/light2.png";
import image12 from "/public/feature-products/light3.png";
import image13 from "/public/feature-products/light4.png";
import image27 from "/public/feature-products/office1.png";
import image15 from "/public/feature-products/office2.png";
import image16 from "/public/feature-products/office3.png";
import image17 from "/public/feature-products/office4.png";
import image18 from "/public/feature-products/office5.png";
import image19 from "/public/feature-products/sofa1.png";
import image20 from "/public/feature-products/sofa2.png";
import image21 from "/public/feature-products/sofa3.png";
import image22 from "/public/feature-products/sofa4.png";
import image23 from "/public/feature-products/sofa5.png";
import image24 from "/public/feature-products/sofa6.png";
import image25 from "/public/feature-products/table1.png";
import image26 from "/public/feature-products/table2.png";
import image28 from "/public/feature-products/table3.png";
import image29 from "/public/feature-products/table4.png";
import image30 from "/public/feature-products/table5.png";

function createSlug(text: string): string {
  return text
    .toString() // Convert to string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/[\s\W-]+/g, "-") // Replace spaces and non-word characters with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading or trailing hyphens
}

type CardData = {
  id: number;
  slug: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  title: string;
  moreImg:string[];
  des:string;
  brand:string;
};

export const cardData: CardData[] = [
  {
    id: 1,
    title: "Simpel bed for you and your family",
    slug: createSlug("Simpel bed for you and your family"),
   
    image: image1.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 2,
    title: "Speacial bed for you",
    slug: createSlug("Speacial bed for you"),
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image3.src, image18.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 3,
    title: "Normal bed for you",
    slug: createSlug("Normal bed for you"),
    image: image3.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image5.src, image8.src, image19.src,image29.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {

    id: 4,
    title: "Luxzary bed for you",
    slug: createSlug("Luxzary bed for you"),
    image: image4.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image5.src, image7.src, image17.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 5,
    title: "Classic bed for you",
    slug: createSlug("Classic bed for you"),
    image: image5.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 6,
    title: "Kid's Furnitue for you",
    slug: createSlug("Kid's Furnitue for you"),
    image: image6.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 7,
    title: "Classic Kid's Furnitue",
    slug: createSlug("Classic Kid's Furnitue"),
    image: image7.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 8,
    title: "Simple Chair For you",
    slug: createSlug("Simple Chair For you"),
    image: image8.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 9,
    title: "Normal Chair For you",
    slug: createSlug("Normal Chair For you"),
    image: image9.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 10,
    title: "Simple Light For you",
    slug: createSlug("Simple Light For you"),
    image: image10.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 11,
    title: "Normal Light For you",
    slug: createSlug( "Normal Light For you"),
    image: image11.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 12,
    title: "Classic Light For you",
    slug: createSlug( "Classic Light For you"),
    image: image12.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 13,
    title: "Luxzary Light For you",
    slug: createSlug("Luxzary Light For you"),
    image: image13.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 14,
    title: "Luxzary Office Chair",
    slug: createSlug("Luxzary Office Chair"),
    image: image15.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 15,
    title: "Simple Office Chair",
    slug: createSlug("Simple Office Chair"),
    image: image27.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 16,
    title: "Normal Office Chair",
    slug: createSlug( "Normal Office Chair"),
    image: image16.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 17,
    title: "Clissic Office Chair",
    slug: createSlug( "Clissic Office Chair"),
    image: image17.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 18,
    title: "Luxzary Office Chair two",
    slug: createSlug("Luxzary Office Chair two"),
    image: image18.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 19,
    title: "Luxzary Office Sofa",
    slug: createSlug("Luxzary Office Sofa"),
    image: image19.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 20,
    title: "Luxzary Office Chair two",
    slug: createSlug("Luxzary Office Chair two"),
    image: image20.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 21,
    title: "Luxzary Office Sofa Three",
    slug: createSlug("Luxzary Office Sofa Three"),
    image: image21.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 22,
    title: "Simplle Office Sofa",
    slug: createSlug("Simplle Office Sofa"),
    image: image22.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 23,
    title: "Noraml Office Sofa",
    slug: createSlug("Noraml Office Sofa"),
    image: image23.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 24,
    title: "Classic Office sofa",
    slug: createSlug("Classic Office sofa"),
    image: image24.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 25,
    title: "Classic Office Table",
    slug: createSlug("Classic Office Table"),
    image: image25.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 26,
    title: "Noraml Office Table",
    slug: createSlug( "Noraml Office Table"),
    image: image26.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 27,
    title: "Classic Office Table Two",
    slug: createSlug("Classic Office Table Two"),
    image: image28.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 28,
    title: "Noraml Office Table",
    slug: createSlug("Noraml Office Table"),
    image: image30.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 29,
    title: "Luxzary Office Table",
    slug: createSlug( "Luxzary Office Table"),
    image: image29.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten Brand",
    moreImg:[image20.src, image12.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];
