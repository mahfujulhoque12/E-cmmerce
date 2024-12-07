import image1 from "/public/kids/kids1.png";
import image2 from "/public/kids/kids2.png";
import image3 from "/public/kids/kids3.png";
import image4 from "/public/kids/kids4.png";
import image5 from "/public/kids/kids5.png";
import image6 from "/public/kids/kids6.png";
import image7 from "/public/kids/kids7.png";
import image8 from "/public/kids/kids8.png";
import image9 from "/public/kids/kids9.png";
import image10 from "/public/kids/kids10.png";
import image11 from "/public/kids/kids11.png";
import image12 from "/public/kids/kids12.png";
import image13 from "/public/kids/kids13.png";
import image27 from "/public/kids/kids14.png";
import image15 from "/public/kids/kids15.png";
import image16 from "/public/kids/kids16.png";
import image17 from "/public/kids/kids17.png";
import image18 from "/public/kids/kids18.png";
import image19 from "/public/kids/kids19.png";
import image20 from "/public/kids/kids20.png";
import image21 from "/public/kids/kids21.png";
import image22 from "/public/kids/kids1.png";
import image23 from "/public/kids/kids2.png";
import image24 from "/public/kids/kids3.png";
import image25 from "/public/kids/kids4.png";
import image26 from "/public/kids/kids6.png";
import image28 from "/public/kids/kids8.png";
import image29 from "/public/kids/kids9.png";
import image30 from "/public/kids/kids10.png";

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
    id: 31,
    title: "Simpel bed for you and your family  ",
    slug: createSlug("Simpel bed for you and your family kids kids"),
   
    image: image1.src,
    price: 510,
    oldPrice: 1650,
    discount: 650,
    brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 32,
    title: "Speacial bed for you",
    slug: createSlug("Speacial bed for you kids"),
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image3.src, image18.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 33,
    title: "Normal bed for you",
    slug: createSlug("Normal bed for you kids"),
    image: image3.src,
    price: 8400,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image5.src, image8.src, image19.src,image29.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {

    id: 34,
    title: "Luxzary bed for you",
    slug: createSlug("Luxzary bed for you kids"),
    image: image4.src,
    price: 9500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image5.src, image7.src, image17.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 35,
    title: "Classic bed for you",
    slug: createSlug("Classic bed for you kids"),
    image: image5.src,
    price: 4500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 36,
    title: "Kid's Furnitue for you",
    slug: createSlug("Kid's Furnitue for you kids"),
    image: image6.src,
    price: 8000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 37,
    title: "Classic Kid's Furnitue",
    slug: createSlug("Classic Kid's Furnitue kids"),
    image: image7.src,
    price: 4500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 38,
    title: "Simple Chair For you",
    slug: createSlug("Simple Chair For you kids"),
    image: image8.src,
    price: 800,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 39,
    title: "Normal Chair For you",
    slug: createSlug("Normal Chair For you kids"),
    image: image9.src,
    price: 8100,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 40,
    title: "Simple Light For you",
    slug: createSlug("Simple Light For you kids"),
    image: image10.src,
    price: 6500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 41,
    title: "Normal Light For you",
    slug: createSlug( "Normal Light For you kids"),
    image: image11.src,
    price: 1500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 42,
    title: "Classic Light For you",
    slug: createSlug( "Classic Light For you kids"),
    image: image12.src,
    price: 2500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 43,
    title: "Luxzary Light For you",
    slug: createSlug("Luxzary Light For you kids"),
    image: image13.src,
    price: 3500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 44,
    title: "Luxzary Office Chair",
    slug: createSlug("Luxzary Office Chai kidsr"),
    image: image15.src,
    price: 1200,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 45,
    title: "Simple Office Chair",
    slug: createSlug("Simple Office Chair kids"),
    image: image27.src,
    price: 1800,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 46,
    title: "Normal Office Chair",
    slug: createSlug( "Normal Office Chair kids"),
    image: image16.src,
    price: 1900,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 47,
    title: "Clissic Office Chair",
    slug: createSlug( "Clissic Office Chair kids"),
    image: image17.src,
    price: 2000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 48,
    title: "Luxzary Office Chair two",
    slug: createSlug("Luxzary Office Chair two kids"),
    image: image18.src,
    price: 7900,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 49,
    title: "Luxzary Office Sofa",
    slug: createSlug("Luxzary Office Sofa kids"),
    image: image19.src,
    price: 8100,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 50,
    title: "Luxzary Office Chair two",
    slug: createSlug("Luxzary Office Chair two kids"),
    image: image20.src,
    price: 3200,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 51,
    title: "Luxzary Office Sofa Three",
    slug: createSlug("Luxzary Office Sofa Three kids"),
    image: image21.src,
    price: 2000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 52,
    title: "Simplle Office Sofa",
    slug: createSlug("Simplle Office Sofa kids"),
    image: image22.src,
    price: 7000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 53,
    title: "Noraml Office Sofa",
    slug: createSlug("Noraml Office Sofa kids"),
    image: image23.src,
    price: 2500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 54,
    title: "Classic Office sofa",
    slug: createSlug("Classic Office sofa kids"),
    image: image24.src,
    price: 1600,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 55,
    title: "Classic Office Table",
    slug: createSlug("Classic Office Table kids"),
    image: image25.src,
    price: 1700,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 56,
    title: "Noraml Office Table",
    slug: createSlug( "Noraml Office Table kids"),
    image: image26.src,
    price: 1850,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 57,
    title: "Classic Office Table Two",
    slug: createSlug("Classic Office Table Two kids"),
    image: image28.src,
    price: 8150,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 58,
    title: "Noraml Office Table",
    slug: createSlug("Noraml Office Table"),
    image: image30.src,
    price: 1220,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 59,
    title: "Luxzary Office Table",
    slug: createSlug( "Luxzary Office Table"),
    image: image29.src,
    price: 1890,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image20.src, image12.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];
