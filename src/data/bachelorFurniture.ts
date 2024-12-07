import image1 from "/public/bachelor/bachelor1.png";
import image2 from "/public/bachelor/bachelor2.png";
import image3 from "/public/bachelor/bachelor3.png";
import image4 from "/public/bachelor/bachelor4.png";
import image5 from "/public/bachelor/bachelor5.png";
import image6 from "/public/bachelor/bachelor6.png";
import image7 from "/public/bachelor/bachelor7.png";
import image8 from "/public/bachelor/bachelor8.png";
import image9 from "/public/bachelor/bachelor9.png";
import image10 from "/public/bachelor/bachelor10.png";
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
    id:120,
    title: "Simpel bed for you and your family two",
    slug: createSlug("Simpel bed for you and your bachelor"),
   
    image: image1.src,
    price: 510,
    oldPrice: 1650,
    discount:950,
    brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image7.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:121,
    title: "Speacial bed for you",
    slug: createSlug("Speacial bed for you bachelor"),
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount:950,
     brand:"Top Six",
    moreImg:[image3.src, image8.src, image2.src,image10.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:122,
    title: "Normal bed for you",
    slug: createSlug("Normal bed for you bachelor"),
    image: image3.src,
    price: 8400,
    oldPrice: 9650,
    discount:950,
     brand:"Top Ten",
    moreImg:[image5.src, image8.src, image9.src,image2.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {

    id:123,
    title: "Luxzary bed for you",
    slug: createSlug("Luxzary bed for you bachelor"),
    image: image4.src,
    price: 9500,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image5.src, image7.src, image7.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:124,
    title: "Classic bed for you",
    slug: createSlug("Classic bed for you bachelor"),
    image: image5.src,
    price: 4500,
    oldPrice: 9650,
    discount:950,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:125,
    title: "Kid's Furnitue for you",
    slug: createSlug("Kid's Furnitue for you bachelor"),
    image: image6.src,
    price: 8000,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:126,
    title: "Classic Kid's Furnitue",
    slug: createSlug("Classic Kid's Furnitue bachelor"),
    image: image7.src,
    price: 4500,
    oldPrice: 9650,
    discount:950,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:127,
    title: "Simple Chair For you",
    slug: createSlug("Simple Chair For you bachelor"),
    image: image8.src,
    price: 800,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:128,
    title: "Normal Chair For you",
    slug: createSlug("Normal Chair For you bachelor"),
    image: image9.src,
    price: 8100,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image8.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:129,
    title: "Simple Light For you",
    slug: createSlug("Simple Light For you bachelor"),
    image: image10.src,
    price: 6500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image9.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:130,
    title: "Normal Light For you",
    slug: createSlug( "Normal Light For you bachelor"),
    image: image10.src,
    price: 1500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image10.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  
];
