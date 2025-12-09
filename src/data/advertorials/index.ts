import { AdvertorialContent } from "@/types/advertorial";
import { advertorial1 } from "./advertorial-1";
import { advertorial2 } from "./advertorial-2";
import { advertorial3 } from "./advertorial-3";
import { advertorial4 } from "./advertorial-4";
import { advertorial5 } from "./advertorial-5";

export const advertorials: Record<string, AdvertorialContent> = {
  "1": advertorial1,
  "2": advertorial2,
  "3": advertorial3,
  "4": advertorial4,
  "5": advertorial5,
};

export const getAdvertorialBySlug = (slug: string): AdvertorialContent | undefined => {
  return Object.values(advertorials).find(a => a.slug === slug);
};

export const getAdvertorialById = (id: string): AdvertorialContent | undefined => {
  return advertorials[id];
};
