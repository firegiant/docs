const PRIORITY_SEARCH_PREFIXES = ['wix/schema/', 'firegiant/schema/'] as const;

export const PRIORITY_PAGEFIND_CONTENT_WEIGHT = '8';
export const PRIORITY_PAGEFIND_TITLE_WEIGHT = '10';

export function isPrioritySearchSlug(slug: string): boolean {
  return PRIORITY_SEARCH_PREFIXES.some((prefix) => slug.startsWith(prefix));
}
