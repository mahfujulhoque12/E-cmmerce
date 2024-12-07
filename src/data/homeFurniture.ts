import image1 from "/public/home/home1.png";
import image2 from "/public/home/home2.png";
import image3 from "/public/home/home3.png";
import image4 from "/public/home/home4.png";
import image5 from "/public/home/home5.png";
import image6 from "/public/home/home6.png";
import image7 from "/public/home/home7.png";
import image8 from "/public/home/home8.png";
import image9 from "/public/home/home9.png";
import image10 from "/public/home/home10.png";
import image11 from "/public/home/home11.png";
import image12 from "/public/home/home12.png";
import image13 from "/public/home/home13.png";
import image27 from "/public/home/home14.png";
import image15 from "/public/home/home15.png";
import image16 from "/public/home/home16.png";
import image17 from "/public/home/home17.png";
import image18 from "/public/home/home18.png";
import image19 from "/public/home/home19.png";
import image20 from "/public/home/home20.png";
import image21 from "/public/home/home21.png";
import image22 from "/public/home/home22.png";
import image23 from "/public/home/home23.png";
import image24 from "/public/home/home24.png";
import image25 from "/public/home/home25.png";
import image26 from "/public/home/home26.png";
import image29 from "/public/home/home28.png";
import image30 from "/public/home/home29.png";

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
    id:91,
    title: "Simpel bed for you and your family two",
    slug: createSlug("Simpel bed for you and your home"),
   
    image: image1.src,
    price: 510,
    oldPrice: 1650,
    discount:950,
    brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:92,
    title: "Speacial bed for you",
    slug: createSlug("Speacial bed for you home"),
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount:950,
     brand:"Top Ten",
    moreImg:[image3.src, image18.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:93,
    title: "Normal bed for you",
    slug: createSlug("Normal bed for you home"),
    image: image3.src,
    price: 8400,
    oldPrice: 9650,
    discount:950,
     brand:"Top Ten",
    moreImg:[image5.src, image8.src, image19.src,image29.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {

    id:94,
    title: "Luxzary bed for you",
    slug: createSlug("Luxzary bed for you home"),
    image: image4.src,
    price: 9500,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image5.src, image7.src, image17.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:95,
    title: "Classic bed for you",
    slug: createSlug("Classic bed for you home"),
    image: image5.src,
    price: 4500,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:96,
    title: "Kid's Furnitue for you",
    slug: createSlug("Kid's Furnitue for you home"),
    image: image6.src,
    price: 8000,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:97,
    title: "Classic Kid's Furnitue",
    slug: createSlug("Classic Kid's Furnitue home"),
    image: image7.src,
    price: 4500,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:98,
    title: "Simple Chair For you",
    slug: createSlug("Simple Chair For you home"),
    image: image8.src,
    price: 800,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:99,
    title: "Normal Chair For you",
    slug: createSlug("Normal Chair For you home"),
    image: image9.src,
    price: 8100,
    oldPrice: 9650,
    discount:950,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:100,
    title: "Simple Light For you",
    slug: createSlug("Simple Light For you home"),
    image: image10.src,
    price: 6500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:101,
    title: "Normal Light For you",
    slug: createSlug( "Normal Light For you home"),
    image: image11.src,
    price: 1500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:102,
    title: "Classic Light For you",
    slug: createSlug( "Classic Light For you home"),
    image: image12.src,
    price: 2500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:103,
    title: "Luxzary Light For you",
    slug: createSlug("Luxzary Light For you home"),
    image: image13.src,
    price: 3500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:104,
    title: "Luxzary home Chair",
    slug: createSlug("Luxzary home Chair home"),
    image: image15.src,
    price: 1200,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:105,
    title: "Simple home Chair",
    slug: createSlug("Simple home Chair home"),
    image: image27.src,
    price: 1800,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:106,
    title: "Normal home Chair",
    slug: createSlug( "Normal home Chair home"),
    image: image16.src,
    price: 1900,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:107,
    title: "Clissic home Chair",
    slug: createSlug( "Clissic home Chair home"),
    image: image17.src,
    price: 2000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:108,
    title: "Luxzary home Chair two",
    slug: createSlug("Luxzary home Chair two home"),
    image: image18.src,
    price:10900,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id:109,
    title: "Luxzary home Sofa",
    slug: createSlug("Luxzary home Sofa home"),
    image: image19.src,
    price: 8100,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 110,
    title: "Luxzary home Chair two",
    slug: createSlug("Luxzary home Chair two home"),
    image: image20.src,
    price: 3200,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 111,
    title: "Luxzary home Sofa Three",
    slug: createSlug("Luxzary home Sofa Three home"),
    image: image21.src,
    price: 2000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 112,
    title: "Simplle home Sofa",
    slug: createSlug("Simplle home Sofa home"),
    image: image22.src,
    price:10000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 113,
    title: "Noraml home Sofa",
    slug: createSlug("Noraml home Sofa home"),
    image: image23.src,
    price: 2500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 114,
    title: "Classic home sofa",
    slug: createSlug("Classic home sofa home"),
    image: image24.src,
    price: 1600,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 115,
    title: "Classic home Table",
    slug: createSlug("Classic home Table home"),
    image: image25.src,
    price: 1700,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 116,
    title: "Noraml home Table",
    slug: createSlug( "Noraml home Table home"),
    image: image26.src,
    price: 11150,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 117,
    title: "Classic home Table Two",
    slug: createSlug("Classic home Table Two home"),
    image: image11.src,
    price: 11150,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 118,
    title: "Noraml home Table",
    slug: createSlug("Noraml home Table home"),
    image: image30.src,
    price: 1220,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 119,
    title: "Luxzary home Table",
    slug: createSlug( "Luxzary home Table home"),
    image: image29.src,
    price: 1890,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image20.src, image12.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];
