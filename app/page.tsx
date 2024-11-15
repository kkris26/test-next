import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Hero from "@/components/main/Hero";

export default async function Index() {
  const client = createClient(); 
  const home = await client.getSingle("homepage");
  return (
    <div className="bg-black ">
      <div className="sticky top-0">
    <SliceZone slices={home.data.slices} components={components}/>
      </div>
    <Hero/>
    </div>
  );
}
