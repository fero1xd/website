"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateDynamic() {
  revalidateTag("dynamic-page", "max");
}
