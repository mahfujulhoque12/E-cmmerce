import CardTitle from "@/components/atoms/CardTitle";
import AboutUsCom from "@/components/molecules/about-us/AboutUsCom";

const AboutUs = () =>{
    return (
        <div>
            <CardTitle className="font-bold text-lg lg:text-2xl mb-6">About Us</CardTitle>
            <AboutUsCom/>
        </div>
    )
}

export default AboutUs;