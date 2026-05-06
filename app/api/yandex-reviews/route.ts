import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Review, ReviewsApiResponse } from "@/types";

export const runtime = "nodejs";

async function readLocalJson(): Promise<ReviewsApiResponse> {
  const filePath = path.join(process.cwd(), "data", "yandex-reviews.json");
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as ReviewsApiResponse;
}

export async function GET() {
  const externalUrl = (process.env.YANDEX_REVIEWS_JSON_URL ?? "").trim();

  try {
    if (externalUrl) {
      const res = await fetch(externalUrl, {
        headers: { Accept: "application/json" },
        // Делаем запрос сервер-сервер, чтобы не светить URL/ключи в браузере.
        cache: "no-store",
      });
      if (res.ok) {
        const json = (await res.json()) as ReviewsApiResponse;
        return NextResponse.json(json, {
          headers: {
            "Cache-Control": "public, max-age=0, s-maxage=900, stale-while-revalidate=3600",
          },
        });
      }
    }

    const local = await readLocalJson();
    return NextResponse.json(local, {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=900, stale-while-revalidate=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { reviews: [] as Review[] },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  }
}

