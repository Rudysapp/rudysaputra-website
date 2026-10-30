import { getSortedPostsList, type PostForList } from "@utils/post";

/** Editorial selection is independent of the general pinned ordering. */
export function selectFeaturedPosts(posts: PostForList[], limit = 3): PostForList[] {
  return posts
    .filter((post) => !post.data.draft && post.data.featured)
    .sort((a, b) =>
      (a.data.featuredOrder || Number.MAX_SAFE_INTEGER) - (b.data.featuredOrder || Number.MAX_SAFE_INTEGER) ||
      new Date(b.data.published).getTime() - new Date(a.data.published).getTime() ||
      a.id.localeCompare(b.id),
    )
    .slice(0, limit);
}

export async function getFeaturedPosts(limit = 3): Promise<PostForList[]> {
  return selectFeaturedPosts(await getSortedPostsList(), limit);
}
