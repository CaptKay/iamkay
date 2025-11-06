import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { githubUsername } from '../data/content';

type RawGitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  language?: string | null;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  homepage?: string;
  topics: string[];
  pushedAt: string;
  language?: string;
};

const API_URL = `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`;
const FEATURE_TOPICS = ['portfolio', 'featured'];

export const fetchRepositories = createAsyncThunk<GitHubRepo[]>('github/fetchRepositories', async () => {
  const response = await fetch(API_URL, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('GitHub API rate limit reached. Please try again shortly.');
    }
    throw new Error('Unable to load GitHub repositories at this time.');
  }

  const payload = (await response.json()) as RawGitHubRepo[];

  const filtered = payload
    .filter((repo) => !repo.fork && !repo.archived)
    .map<GitHubRepo>((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description ?? 'No description provided.',
      htmlUrl: repo.html_url,
      homepage: repo.homepage ?? undefined,
      topics: repo.topics ?? [],
      pushedAt: repo.pushed_at,
      language: repo.language ?? undefined
    }));

  const byTopic = filtered.filter((repo) =>
    repo.topics.some((topic) => FEATURE_TOPICS.includes(topic.toLowerCase()))
  );
  const others = filtered.filter((repo) => !byTopic.find((featured) => featured.id === repo.id));

  const ordered = [...byTopic, ...others].sort(
    (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime()
  );

  return ordered.slice(0, 6);
});

type GithubState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  repos: GitHubRepo[];
  error?: string;
};

const initialState: GithubState = {
  status: 'idle',
  repos: []
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.repos = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unexpected error fetching repositories.';
      });
  }
});

export default githubSlice.reducer;
