"use client";

import { useQuery } from "@tanstack/react-query";
import { getLandingData } from "../getLandingData";

export function useLandingQuery() {
  return useQuery({
    queryKey: ["landing", "main-page"],
    queryFn: getLandingData
  });
}
