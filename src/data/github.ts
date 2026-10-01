export interface Commit {
  sha: string;
  repo: string;
  message: string;
  date: string;
  url: string;
}

// Runs at build time only. Any failure returns an empty list, so a GitHub
// outage or rate limit hides the section instead of breaking the deploy.
export async function getRecentCommits(user: string, count = 6): Promise<Commit[]> {
  const url =
    `https://api.github.com/search/commits?q=${encodeURIComponent(`author:${user}`)}` +
    `&sort=author-date&order=desc&per_page=${count}`;
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
    const { items } = await res.json();
    return items.map((item: any) => ({
      sha: item.sha.slice(0, 7),
      repo: item.repository.full_name,
      message: item.commit.message.split("\n")[0],
      date: item.commit.author.date.slice(0, 10),
      url: item.html_url,
    }));
  } catch (error) {
    console.warn(`[github] recent commits unavailable: ${error}`);
    return [];
  }
}
