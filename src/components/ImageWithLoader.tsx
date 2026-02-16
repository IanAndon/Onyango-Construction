"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { SpinnerIcon } from "./LoadingSpinner";

type ImageWithLoaderProps = ImageProps & {
  /** Optional class for the loading placeholder (e.g. "bg-primary" for dark sections). */
  placeholderClassName?: string;
};

/** Wraps Next Image and shows a spinner while the image is loading. */
export default function ImageWithLoader({
  className = "",
  placeholderClassName = "bg-gray-200",
  ...props
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          className={`absolute inset-0 flex items-center justify-center text-primary ${placeholderClassName}`}
          aria-hidden
        >
          <SpinnerIcon className="w-10 h-10 text-accent" />
        </div>
      )}
      <Image
        {...props}
        className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
