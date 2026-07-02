"use client";

import { useQuery } from "@tanstack/react-query";
import { contactInfo } from "@/lib/i18n/dictionaries";

type GitHubUser = {
  public_repos: number;
  followers: number;
};

async function fetchGitHubUser(): Promise<GitHubUser> {
  const response = await fetch(
    `https://api.github.com/users/${contactInfo.githubUser}`,
  );
  if (!response.ok) throw new Error(`GitHub API ${response.status}`);
  return response.json();
}

/**
 * Live GitHub stats, styled as terminal output. Renders nothing when the
 * API is unreachable or rate-limited — the section reads fine without it.
 */
export function GitHubStats() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["github-user", contactInfo.githubUser],
    queryFn: fetchGitHubUser,
  });

  if (isError) return null;

  return (
    <a
      href={contactInfo.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-8 inline-block rounded-sm border hairline bg-panel px-4 py-3 font-mono text-xs text-ghost transition-colors hover:border-accent/40"
    >
      <span className="block text-faint">
        <span className="text-accent">~ %</span> gh api users/
        {contactInfo.githubUser}
      </span>
      <span className="mt-1.5 block">
        {isPending ? (
          <span className="text-faint">…</span>
        ) : (
          <>
            repos: <span className="text-ink">{data.public_repos}</span>
            <span className="mx-2 text-faint">·</span>
            followers: <span className="text-ink">{data.followers}</span>
          </>
        )}
      </span>
    </a>
  );
}
