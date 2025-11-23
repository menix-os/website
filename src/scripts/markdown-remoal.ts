import removeMd from "remove-markdown";

export function removeMarkdown(markdown: string): string {
	return removeMd(markdown);
}
