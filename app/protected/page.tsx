import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import ProductCard from "@/componentss/ProductCard";


export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className=" flex-1 space-y-8">
      <ProductCard
       image="/images/headphone2.png"
       title="Menstrual Cup - Medium Size"
       description="Medical-grade silicone menstrual cup that offers up to 12 hours of protection. Reusable, eco-friendly, and cost-effective"
       price={4500}
      />
      <ProductCard
       image="/images/headphone2.png"
       title="Eco-friendly Organic Pads"
       description="100% organic cotton pads that are biodegradable and free from plastics, perfumes, and chemicals. Comfortable and perfect for daily use, sensitive skin, and an eco-conscious lifestyle."
       price={999}
      />
      <ProductCard
       image="/images/headphone2.png"
       title="Period Panties - Hipster Style"
       description="Absorbent, leak-proof underwear that replaces disposable pads and tampons. Can hold up to 2 tampons worth of flow. Washable, reusable, and designed for comfort and confidence all day long."
       price={5200}
      />
    </div>
  );
}
