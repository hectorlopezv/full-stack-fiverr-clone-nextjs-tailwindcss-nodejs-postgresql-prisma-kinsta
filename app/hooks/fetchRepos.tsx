import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import axios from 'axios';

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await axios.get<any[]>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(githubUser: string) {
  return useQuery(['repos', githubUser], fetchRepos);
}
