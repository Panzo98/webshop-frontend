import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BreadCrubms from "./BreadCrumbs";
import Link from "next/link";

export default function ShopBanner() {
  const { asPath, pathname } = useRouter();
  const filteredPathname = pathname.substring(1);
  const capitalizedPathname =
    filteredPathname.charAt(0).toUpperCase() + filteredPathname.slice(1);

  return (
    <div className="relative">
      <BreadCrubms path={capitalizedPathname} />

      <Image
        src="/shop banner.webp"
        alt="shop banner"
        width={1797}
        height={397}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRhgEAABXRUJQVlA4WAoAAAAgAAAAZQIAhwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKgIAANAhAJ0BKmYCiAA+tVqmUCclIyKgKXDgFolpbuEuOU4/5vUBFMax7mfIAtT40Xz40Snvq5xolPfVzjRKe+ucuNtY+BNM/1EL7XYiirNWlc9qtk2u+SHiwRrV/D5TICkQbgLJxHUrM8Mni+7h0XAcIr2A+v9ICjfMdBXTqUUV8cuNT87fsCIpuc/AZYep1rwM3uwUZVf6OfnwiwzkIfX9ckttuWu+stfG6Go2yw3mrXfUGZKJ+VCAmsqC2W+GILA2qMrYX0ilgIIftj7cjEAeUWgqA2qMsNfFZUFstPlgbVHg3Ne0KqzNJWq/CisPVqjKgtlqCoDbS1vmzm1RlQW1zwXJpl7x1ZSy4ddw5yjOtD+lz06MIQa4wAD+3u13eU8+DGhJ1V4BpztDiPI5Q4hJjCJ4BBntRxgMxzJlk4HRcJ5gZPDbpcKxOoztND/glvkrAj3yXCwhnk7de9kAHtHogLPG+3079gPowdNiAg4n/qqGO3zOrsaYEB1a+ERKjVpLXL4r3aCidxFJ1PdicGcDowQjgypPCSRII4gEZACQY6+QLrsqm8+yIWeZEHns5IqTWJN/jPJqwEwGyNBeVbQp2F62B3KG66IwgeYxNWPbE3B5S0BDlVBd2VeZzHdNn0lrykez+PPJ99Hkrzg/hdRaJgNVvHVNNGI7qseo/na/VEfZA8GJVR96K1n7wQyvetPuxhvBBjnwewZ8ChV1gCuW3oyI923ELkhlQAAA"
      />
    </div>
  );
}
