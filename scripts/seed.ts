import { db } from "../lib/db/client";
import { services, blogPosts } from "../lib/db/schema";
import { seedServices, seedBlogPosts } from "./seed-data";

async function main() {
  console.log(`Sembrando ${seedServices.length} servicios...`);
  for (const service of seedServices) {
    await db
      .insert(services)
      .values(service)
      .onConflictDoUpdate({ target: services.slug, set: service });
  }

  console.log(`Sembrando ${seedBlogPosts.length} posts de blog...`);
  for (const post of seedBlogPosts) {
    await db
      .insert(blogPosts)
      .values(post)
      .onConflictDoUpdate({ target: blogPosts.slug, set: post });
  }

  console.log("Seed completado.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
