import Navbar from "@component/components/navbar";
import Footer from "@component/components/footer";
import Image from "next/image";
import amyInItaly from "../../public/amy-in-italy.jpg"

export function LearnMoreCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <Image src={amyInItaly} alt="Amy in Italy" />
      <h3 className="py-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="bg-gray-300 grid grid-cols-1 lg:grid-cols-2 p-48">
        <div className="flex flex-col pr-12">
          <h1 className="text-white font-serif font-thin mb-4">
            Are you struggling with your adopted child? You&apos;ll love my free
            guide, 3 STEPS to a BETTER RELATIONSHIP
          </h1>
          <a className="button">Grab your free copy!</a>
        </div>
      </section>

      <section className="px-80 py-24 text-center">
        <h2 className="text-2xl font-serif">
          “The joy we feel has little to do with the circumstances of our lives
          and everything to do with the focus of our lives.”
        </h2>
        <h3 className="text-xl">- Russell M. Nelson</h3>
      </section>

      <section className="bg-gray-300 px-48 py-12 text-center">
        <h1 className="text-3xl font-bold mb-12">LEARN MORE</h1>
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

      <section className="hidden">what is life coaching</section>

      <section className="hidden">contact</section>

      <Footer />
    </main>
  );
}
