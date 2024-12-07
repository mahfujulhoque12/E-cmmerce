import image1 from "/public/office/office1.png";
import image2 from "/public/office/office2.png";
import image3 from "/public/office/office3.png";
import image4 from "/public/office/office4.png";
import image5 from "/public/office/office5.png";
import image6 from "/public/office/office6.png";
import image7 from "/public/office/office7.png";
import image8 from "/public/office/office8.png";
import image9 from "/public/office/office9.png";
import image10 from "/public/office/office10.png";
import image11 from "/public/office/office11.png";
import image12 from "/public/office/office12.png";
import image13 from "/public/office/office13.png";
import image27 from "/public/office/office14.png";
import image15 from "/public/office/office15.png";
import image16 from "/public/office/office16.png";
import image17 from "/public/office/office17.png";
import image18 from "/public/office/office18.png";
import image19 from "/public/office/office19.png";
import image20 from "/public/office/office20.png";
import image21 from "/public/office/office21.png";
import image22 from "/public/office/office22.png";
import image23 from "/public/office/office23.png";
import image24 from "/public/office/office24.png";
import image25 from "/public/office/office25.png";
import image26 from "/public/office/office26.png";
import image28 from "/public/office/office27.png";
import image29 from "/public/office/office28.png";
import image30 from "/public/office/office29.png";

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
    id: 61,
    title: "Simpel bed for you and your family two",
    slug: createSlug("Simpel bed for you and your office"),
   
    image: image1.src,
    price: 510,
    oldPrice: 1650,
    discount: 650,
    brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 62,
    title: "Speacial bed for you",
    slug: createSlug("Speacial bed for you office"),
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image3.src, image18.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 63,
    title: "Normal bed for you",
    slug: createSlug("Normal bed for you office"),
    image: image3.src,
    price: 8400,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image5.src, image8.src, image19.src,image29.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {

    id: 64,
    title: "Luxzary bed for you",
    slug: createSlug("Luxzary bed for you office"),
    image: image4.src,
    price: 9500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image5.src, image7.src, image17.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 65,
    title: "Classic bed for you",
    slug: createSlug("Classic bed for you office"),
    image: image5.src,
    price: 4500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 66,
    title: "Kid's Furnitue for you",
    slug: createSlug("Kid's Furnitue for you office"),
    image: image6.src,
    price: 8000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 67,
    title: "Classic Kid's Furnitue",
    slug: createSlug("Classic Kid's Furnitue office"),
    image: image7.src,
    price: 4500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 68,
    title: "Simple Chair For you",
    slug: createSlug("Simple Chair For you office"),
    image: image8.src,
    price: 800,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 69,
    title: "Normal Chair For you",
    slug: createSlug("Normal Chair For you office"),
    image: image9.src,
    price: 8100,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 70,
    title: "Simple Light For you",
    slug: createSlug("Simple Light For you office"),
    image: image10.src,
    price: 6500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 71,
    title: "Normal Light For you",
    slug: createSlug( "Normal Light For you office"),
    image: image11.src,
    price: 1500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top One",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 72,
    title: "Classic Light For you",
    slug: createSlug( "Classic Light For you office"),
    image: image12.src,
    price: 2500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 73,
    title: "Luxzary Light For you",
    slug: createSlug("Luxzary Light For you office"),
    image: image13.src,
    price: 3500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 74,
    title: "Luxzary Office Chair",
    slug: createSlug("Luxzary Office Chair office"),
    image: image15.src,
    price: 1200,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 75,
    title: "Simple Office Chair",
    slug: createSlug("Simple Office Chair office"),
    image: image27.src,
    price: 1800,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 76,
    title: "Normal Office Chair",
    slug: createSlug( "Normal Office Chair office"),
    image: image16.src,
    price: 1900,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 77,
    title: "Clissic Office Chair",
    slug: createSlug( "Clissic Office Chair office"),
    image: image17.src,
    price: 2000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 78,
    title: "Luxzary Office Chair two",
    slug: createSlug("Luxzary Office Chair two office"),
    image: image18.src,
    price: 7900,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 79,
    title: "Luxzary Office Sofa",
    slug: createSlug("Luxzary Office Sofa office"),
    image: image19.src,
    price: 8100,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 80,
    title: "Luxzary Office Chair two",
    slug: createSlug("Luxzary Office Chair two office"),
    image: image20.src,
    price: 3200,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 81,
    title: "Luxzary Office Sofa Three",
    slug: createSlug("Luxzary Office Sofa Three office"),
    image: image21.src,
    price: 2000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 82,
    title: "Simplle Office Sofa",
    slug: createSlug("Simplle Office Sofa office"),
    image: image22.src,
    price: 7000,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 83,
    title: "Noraml Office Sofa",
    slug: createSlug("Noraml Office Sofa office"),
    image: image23.src,
    price: 2500,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 84,
    title: "Classic Office sofa",
    slug: createSlug("Classic Office sofa office"),
    image: image24.src,
    price: 1600,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Six",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 85,
    title: "Classic Office Table",
    slug: createSlug("Classic Office Table office"),
    image: image25.src,
    price: 1700,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 86,
    title: "Noraml Office Table",
    slug: createSlug( "Noraml Office Table office"),
    image: image26.src,
    price: 1850,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 87,
    title: "Classic Office Table Two",
    slug: createSlug("Classic Office Table Two office"),
    image: image28.src,
    price: 8150,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 88,
    title: "Noraml Office Table",
    slug: createSlug("Noraml Office Table office"),
    image: image30.src,
    price: 1220,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image2.src, image10.src, image3.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 89,
    title: "Luxzary Office Table",
    slug: createSlug( "Luxzary Office Table office"),
    image: image29.src,
    price: 1890,
    oldPrice: 9650,
    discount: 650,
     brand:"Top Ten",
    moreImg:[image20.src, image12.src, image23.src,image13.src],
    des:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];
