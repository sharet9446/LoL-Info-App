"use server";

import { RotationChampionIds } from "@/types/champion";

export async function GET() {
  const res = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  const rotationChampions: RotationChampionIds = data.freeChampionIds;
  return Response.json({ rotationChampions });
}
