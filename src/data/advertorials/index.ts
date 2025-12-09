import { AdvertorialContent } from "@/types/advertorial";
import { advertorial1 } from "./advertorial-1";

export const advertorials: Record<string, AdvertorialContent> = {
  "1": advertorial1,
};

export const getAdvertorialById = (id: string): AdvertorialContent | undefined => {
  return advertorials[id];
};
