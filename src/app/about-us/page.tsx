import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Section from "@/components/layout/Section";
import Breadcumb from "@/components/molecules/breadcumb/Breadcumb";
import AboutUs from "@/components/organisms/about-us/AboutUs";




const page = () =>{
    return (
        <Section className="py-5 md:py-10 pb-28 md:pb-10">
            <MaxWidthWrapper>
                <Breadcumb/>
                <AboutUs/>
            </MaxWidthWrapper>
        </Section>
    )
}

export default page;

