import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function compressPublicKey(uncompressedKey: string): string {
  const x = uncompressedKey.slice(2, 66); // X coordinate
  const y = uncompressedKey.slice(66); // Y coordinate
  const yInt = BigInt('0x' + y);

  const prefix = yInt % 2n === 0n ? '02' : '03'; // Even Y -> 02, Odd Y -> 03
  return prefix + x;
}