import type { APIRoute } from "astro";
import { emailSubscriber } from "../../lib/db/schema";
import { db } from "../../lib/db/db";

export const prerender = false;
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email: string | undefined = formData.get("email")?.toString();
  if (!email) return new Response("error!", { status: 400 });
  try {
    await db
      .insert(emailSubscriber)
      .values([{ email }])
      .returning()
      .onConflictDoNothing({ target: emailSubscriber.email });
    return new Response("success!", { status: 201 });
  } catch (e) {
    return new Response("something went wrong :-(", { status: 500 });
  }
};
