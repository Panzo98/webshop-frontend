import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ShopBanner({ path }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-4xl font-medium">
      <div className="flex flex-col">
        <span className="text-center">{path}</span>
        <div className="flex items-center lg:mt-4 mt-1">
          <Link href="/" className="text-base">
            Home
          </Link>
          <span className="text-base px-2 text-medium">{">"}</span>
          <span className="text-base font-bold">{path}</span>
        </div>
      </div>
    </div>
  );
}
