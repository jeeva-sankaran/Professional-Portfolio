"use client";

import { useEffect, useState } from "react";

interface PatchedWorkflowImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PatchedWorkflowImage({ src, alt, className }: PatchedWorkflowImageProps) {
  const [patchedSrc, setPatchedSrc] = useState(src);

  useEffect(() => {
    if (!src) return;

    // We only patch specific workflow images
    if (!src.endsWith("A-1.png") && !src.endsWith("M-1.png")) {
      setPatchedSrc(src);
      return;
    }

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const w = img.width;
      const h = img.height;

      if (src.endsWith("A-1.png")) {
        // Patch bottom-left panel watermark
        const tw = w * 0.035;
        const th = h * 0.085;
        const tx = w * 0.012;
        const ty = h * 0.665;
        const sx = w * 0.055;
        const sy = h * 0.665;
        ctx.drawImage(canvas, sx, sy, tw, th, tx, ty, tw, th);
      } else if (src.endsWith("M-1.png")) {
        // Patch bottom-left of final render panel watermark
        const tw = w * 0.035;
        const th = h * 0.085;
        const tx = w * 0.792;
        const ty = h * 0.695;
        const sx = w * 0.835;
        const sy = h * 0.695;
        ctx.drawImage(canvas, sx, sy, tw, th, tx, ty, tw, th);
      }

      setPatchedSrc(canvas.toDataURL());
    };
  }, [src]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={patchedSrc} alt={alt} className={className} />
  );
}
