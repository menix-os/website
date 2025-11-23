import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context: any) {
	return rss({
		title: "Menix Blog",
		description: "Blog posts from the Menix project",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./blog/*.md")),
		customData: `<language>en-us</language>`,
	});
}
