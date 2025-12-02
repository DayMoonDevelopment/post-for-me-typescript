// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/social-posts/{id}',
  operationId: 'SocialPostsController_getPost_v1',
};

export const tool: Tool = {
  name: 'retrieve_social_posts',
  description: 'Get Post by ID',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.socialPosts.retrieve(id));
  } catch (error) {
    if (error instanceof PostForMe.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
