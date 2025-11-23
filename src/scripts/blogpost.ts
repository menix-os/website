export interface BlogPostInfo {
	title: string;
	date: Date;
	author: string;
	url: string;
	img?: string;
	rawContent: string;
}

export function postInfoFromRawPosts(raw: any[]): BlogPostInfo[] {
	return raw.map((post) => {
		const rawContent: string = post.rawContent().trim();

		return {
			author: post.frontmatter.author,
			date: new Date(post.frontmatter.date),
			title: post.frontmatter.title,
			img: post.frontmatter.img,
			url: post.url,
			rawContent,
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
