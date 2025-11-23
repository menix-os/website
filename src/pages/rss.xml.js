import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { loadRawPosts } from "../scripts/blogpost";

const posts = loadRawPosts();

export async function GET(context) {
	return rss({
		title: "Menix Blog",
		description: "Blog posts from the Menix project",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./blog/*.md")),
		customData: `<language>en-us</language>`,
	});
}
