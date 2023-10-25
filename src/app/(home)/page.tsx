import Image from "next/image";
import amyInItaly from "/public/amy-in-italy.jpg";
import familyPhoto from "/public/familyPhoto.jpeg";
import background from "/public/background-crop.jpeg";
import CallToActionButton from "@component/components/callToActionButton";
import "./styles.css";
import layeredWaves from "/public/layered-waves-haikei.svg";
import footerWaves from "/public/footer-wave.svg";

function LearnMoreCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: any;
  alt: string;
}) {
  return (
    <div>
      <Image src={image} alt={alt} />
      <h3 className="py-4 uppercase font-bold">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-3 relative pb-[85px]">
        <div className="hidden lg:block" />
        <Image
          src={background}
          alt="background"
          className="col-span-3 lg:col-span-2 filter brightness-75"
          priority
        />
        <div className="col-span-3 w-full lg:w-auto lg:max-w-xl xl:max-w-2xl py-20 pl-16 pr-24 xl:pl-32 xl:pr-44 lg:absolute  xl:top-16 bg-gray-100">
          <div className="flex flex-col">
            <h1 className="font-serif font-thin mb-4 ">
              Schedule a free consultation today
            </h1>
            <h3 className="font-serif font-extralight mb-4">
              Get the tools you need to unlock your potential!
            </h3>
            <CallToActionButton />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 px-12 sm:px-24 lg:px-80 md:py-12 lg:py-24 text-center">
        <h3 className="font-serif italic font-thin mb-4">
          “The joy we feel has little to do with the circumstances of our lives
          and everything to do with the focus of our lives.”
        </h3>
        <h4>- Russell M. Nelson</h4>
      </section>

      <section className="flex flex-col p-8 sm:px-12 lg:px-48 sm:py-12 items-center text-center">
        <h1 className="text-3xl font-bold mb-6 uppercase">About me</h1>
        <div className="h-[4px] w-[80px] bg-dark-gold mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
          <LearnMoreCard
            title={"Hi, I'm Amy"}
            description={
              "I'm a Certified Life Coach, mother of six by adoption and birth, and believer that we are all capable of creating a life full of joy, peace and fulfillment."
            }
            image={amyInItaly}
            alt={"Amy in Italy"}
          />
          <LearnMoreCard
            title={"I can help"}
            description={
              "As a wife, mother, and coach, I understand the unique joys and struggles that come with your situation. For years, I struggled with feelings of fear, anger, and the inability to be the person I wanted to be."
            }
            image={familyPhoto}
            alt={"A family photo of the Hirschis"}
          />
        </div>
      </section>

      <Image className="waves" alt="waves svg" src={layeredWaves} />

      {/* Call to action section */}
      <section className="bg-gray-100 py-12 px-12 lg:px-48">
        <div className="flex justify-center">
          <div>
            <h3 className="mb-4">
              Looking for a little more direction in your life? I can help!
            </h3>
            <CallToActionButton />
          </div>
        </div>
      </section>

      <Image className="waves" alt="waves svg" src={footerWaves} />
    </>
  );
}
