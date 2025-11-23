import { removeMarkdown } from "./markdown-remoal";

export interface BlogPostInfo {
	title: string;
	date: Date;
	author: string;
	url: string;
	img?: string;
	rawContent: string;
	markdownRemovedContent: string;
	lastEdited: Date | null;
}

export function postInfoFromRawPosts(raw: any[]): BlogPostInfo[] {
	return raw.map((post) => {
		const rawContent: string = post.rawContent().trim();

		const markdownRemovedContent = removeMarkdown(rawContent);

		const lastEdited: string | null = post.frontmatter.lastEdited;

		return {
			author: post.frontmatter.author,
			date: new Date(post.frontmatter.date),
			title: post.frontmatter.title,
			img: post.frontmatter.img,
			url: post.url,
			rawContent,
			markdownRemovedContent,
			lastEdited: lastEdited ? new Date(lastEdited) : null,
		};
	});
}

export function loadRawPosts(): any[] {
	return Object.values(
		import.meta.glob("../pages/blog/*.md", { eager: true }),
	);
}

export function loadPostInfos(): BlogPostInfo[] {
	return postInfoFromRawPosts(loadRawPosts());
}
