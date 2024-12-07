import image2 from "/public/bedRoom/bedRoom2.png";
import image3 from "/public/bedRoom/bedRoom3.png";
import image4 from "/public/bedRoom/bedRoom4.png";
import image5 from "/public/bedRoom/bedRoom5.png";
import image6 from "/public/bedRoom/bedRoom6.png";
import image7 from "/public/bedRoom/bedRoom7.png";
import image8 from "/public/bedRoom/bedRoom8.png";
import image9 from "/public/bedRoom/bedRoom9.png";
import image10 from "/public/bedRoom/bedRoom10.png";
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
   id:131,
    title: "Speacial bed for you",
    slug: createSlug("Speacial bed for you bedRoom"),
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount:950,
     brand:"Top Six",
    moreImg:[image3.src, image8.src, image2.src,image10.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:132,
    title: "Normal bed for you",
    slug: createSlug("Normal bed for you bedRoom"),
    image: image3.src,
    price: 8400,
    oldPrice: 9650,
    discount:950,
     brand:"Top Ten",
    moreImg:[image5.src, image8.src, image9.src,image2.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {

    id:133,
    title: "Luxzary bed for you",
    slug: createSlug("Luxzary bed for you bedRoom"),
    image: image4.src,
    price: 9500,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image5.src, image7.src, image7.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:134,
    title: "Classic bed for you",
    slug: createSlug("Classic bed for you bedRoom"),
    image: image5.src,
    price: 4500,
    oldPrice: 9650,
    discount:950,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:135,
    title: "Kid's Furnitue for you",
    slug: createSlug("Kid's Furnitue for you bedRoom"),
    image: image6.src,
    price: 8000,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:136,
    title: "Classic Kid's Furnitue",
    slug: createSlug("Classic Kid's Furnitue bedRoom"),
    image: image7.src,
    price: 4500,
    oldPrice: 9650,
    discount:950,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:137,
    title: "Simple Chair For you",
    slug: createSlug("Simple Chair For you bedRoom"),
    image: image8.src,
    price: 800,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image3.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:138,
    title: "Normal Chair For you",
    slug: createSlug("Normal Chair For you bedRoom"),
    image: image9.src,
    price: 8100,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image8.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:139,
    title: "Simple Light For you",
    slug: createSlug("Simple Light For you bedRoom"),
    image: image10.src,
    price: 6500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image9.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:140,
    title: "Normal Light For you",
    slug: createSlug( "Normal Light For you bedRoom"),
    image: image10.src,
    price: 1500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image10.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  
];
