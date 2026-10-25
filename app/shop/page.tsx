import type { Metadata } from "next";
import { Suspense } from "react";
import ShopView from "@/components/ShopView";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="page">
      <Suspense>
        <ShopView />
      </Suspense>
    </div>
  );
}
