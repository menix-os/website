export interface BlogPostInfo {
	title: string;
	date: Date;
	author: string;
	url: string;
	img?: string;
}

export function postInfoFromRawPosts(raw: any[]): BlogPostInfo[] {
	return raw.map((post) => {
		console.log(post);
		console.log(post.rawContent);
		console.log(post.getHeadings);
		console.log(post.getHeadings());
		console.log(post.rawContent());
		return {
			author: post.frontmatter.author,
			date: new Date(post.frontmatter.date),
			title: post.frontmatter.title,
			img: post.frontmatter.img,
			url: post.url,
		};
	});
}
