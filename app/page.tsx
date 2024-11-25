import Categories from "@/components/categories-section/Categories";
import Hero from "@/components/hero/Hero";
import PreLoader from "@/components/PreLoader/PreLoader";
import Prouduct from "@/components/product/Prouduct";



export default async function Home() {
  return (
    <>
    <PreLoader/>
    <div className="prescroll">
     <Hero/>
     <Categories/>
     <Prouduct/>
    </div>
    </>
  );
}
