import Navbar from "@component/components/navbar";
import Footer from "@component/components/footer";
import Image from "next/image";
import amyInItaly from "../../public/amy-in-italy.jpg";
import background from "../../public/background.jpeg";

function LearnMoreCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <Image src={amyInItaly} alt="Amy in Italy" />
      <h3 className="py-4 uppercase font-bold">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="relative">
        <Image src={background} alt="background" className="w-full" priority />

        <div className="bg-gray-800 bg-opacity-50 grid grid-cols-1 lg:grid-cols-2 p-48 absolute top-0 left-0 h-full">
          <div className="flex flex-col pr-12">
            <h1 className="text-white font-serif font-thin mb-4">
              Are you struggling with your adopted child? You&apos;ll love my
              free guide, 3 STEPS to a BETTER RELATIONSHIP
            </h1>
            <a className="button">Grab your free copy!</a>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 px-80 py-24 text-center">
        <h2 className="font-serif italic font-thin mb-4">
          “The joy we feel has little to do with the circumstances of our lives
          and everything to do with the focus of our lives.”
        </h2>
        <h3>- Russell M. Nelson</h3>
      </section>

      <section className="flex flex-col px-48 py-12 items-center text-center">
        <h1 className="text-3xl font-bold mb-6">LEARN MORE</h1>
        <div className="h-[4px] w-[80px] bg-dark-gold mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <LearnMoreCard
            title={"Hi, I'm Amy"}
            description={
              "I'm a Certified Life Coach, mother of six (both biological and adopted), member of the Church of Jesus Christ of Latter-Day Saints, and believer that we are all capable of creating a life full of joy, peace and fulfillment."
            }
          />
          <LearnMoreCard
            title={"I get it"}
            description={
              "As an adoptive mother, I understand the unique joy, struggle, and full spectrum of emotions that adoptive parents experience. For years, I struggled with feelings of fear, anger, and the inability to be the type of mother I wanted to be."
            }
          />
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-gray-100 py-12 px-12 lg:px-48">
        <div className="grid grid-cols-2 gap-12">
            <div>

            </div>
            <div>
              <h3 className="mb-4">Need help with something? My e-book can help!</h3>
              <a className="button">Grab your free copy!</a>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
