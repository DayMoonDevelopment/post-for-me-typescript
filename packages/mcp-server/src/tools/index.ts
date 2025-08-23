// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_upload_url_media from './media/create-upload-url-media';
import create_social_posts from './social-posts/create-social-posts';
import retrieve_social_posts from './social-posts/retrieve-social-posts';
import update_social_posts from './social-posts/update-social-posts';
import list_social_posts from './social-posts/list-social-posts';
import delete_social_posts from './social-posts/delete-social-posts';
import retrieve_social_post_results from './social-post-results/retrieve-social-post-results';
import list_social_post_results from './social-post-results/list-social-post-results';
import create_social_accounts from './social-accounts/create-social-accounts';
import retrieve_social_accounts from './social-accounts/retrieve-social-accounts';
import update_social_accounts from './social-accounts/update-social-accounts';
import list_social_accounts from './social-accounts/list-social-accounts';
import create_auth_url_social_accounts from './social-accounts/create-auth-url-social-accounts';
import disconnect_social_accounts from './social-accounts/disconnect-social-accounts';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_upload_url_media);
addEndpoint(create_social_posts);
addEndpoint(retrieve_social_posts);
addEndpoint(update_social_posts);
addEndpoint(list_social_posts);
addEndpoint(delete_social_posts);
addEndpoint(retrieve_social_post_results);
addEndpoint(list_social_post_results);
addEndpoint(create_social_accounts);
addEndpoint(retrieve_social_accounts);
addEndpoint(update_social_accounts);
addEndpoint(list_social_accounts);
addEndpoint(create_auth_url_social_accounts);
addEndpoint(disconnect_social_accounts);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
