import type { Metadata } from "next";
import CustomOrderForm from "@/components/CustomOrderForm";
import SareeArt from "@/components/SareeArt";

export const metadata: Metadata = {
  title: "Custom & bulk orders",
  description: "Vastrams stitched to your idol's height, and bulk orders of sarees and veshtis for temples and functions.",
};

export default function CustomOrdersPage() {
  return (
    <div className="page">
      <div className="custom">
        <div className="custom__intro">
          <h1 className="page-title">Custom and bulk orders</h1>
          <p>
            We stitch pavadais and vastrams to fit any idol, from small pooja room murtis to temple utsava murtis, in the colours and border you choose.
          </p>
          <p>
            For temples, festivals and weddings we also take bulk orders of sarees, veshtis and angavastrams.
          </p>
          <ol className="steps">
            <li>Tell us what you need using the form.</li>
            <li>We reply on WhatsApp with fabric choices and a price.</li>
            <li>Once you confirm, we stitch and ship it, or keep it ready for pickup in Mylapore.</li>
          </ol>
          <div className="custom__art">
            <SareeArt kind="vastram" body="#A51F2E" border="#C9A14A" zari="#F1D791" motif="butta" />
            <SareeArt kind="vastram" body="#E1AE35" border="#7B1E2B" motif="mango" />
          </div>
        </div>
        <CustomOrderForm />
      </div>
    </div>
  );
}
