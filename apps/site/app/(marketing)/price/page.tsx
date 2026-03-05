import { SiteHeader } from "@/components/site-header"
import Pricing from "@/components/pricing"

export default function PricePage() {
  return (
    <>
      <SiteHeader />
      <div className="pt-24">
        <Pricing />
      </div>
    </>
  )
}
