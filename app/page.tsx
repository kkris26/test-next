import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import Hero from "@/components/main/Hero";

export default async function Index() {
  const client = createClient(); 
  const home = await client.getSingle("homepage");
  return (
    <div>
    <Hero/>
    <SliceZone slices={home.data.slices} components={components}/>
    </div>
  );
}
