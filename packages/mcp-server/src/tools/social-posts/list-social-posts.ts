// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/social-posts',
  operationId: 'SocialPostsController_getAllPosts_v1',
};

export const tool: Tool = {
  name: 'list_social_posts',
  description: 'Get a paginated result for posts based on the applied filters',
  inputSchema: {
    type: 'object',
    properties: {
      external_id: {
        type: 'array',
        description: 'Filter by external ID. Multiple values imply OR logic.',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'number',
        description: 'Number of items to return',
      },
      offset: {
        type: 'number',
        description: 'Number of items to skip',
      },
      platform: {
        type: 'array',
        description: 'Filter by platforms. Multiple values imply OR logic.',
        items: {
          type: 'string',
          enum: [
            'bluesky',
            'facebook',
            'instagram',
            'linkedin',
            'pinterest',
            'threads',
            'tiktok',
            'x',
            'youtube',
          ],
        },
      },
      status: {
        type: 'array',
        description: 'Filter by post status. Multiple values imply OR logic.',
        items: {
          type: 'string',
          enum: ['draft', 'scheduled', 'processing', 'processed'],
        },
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.socialPosts.list(body));
  } catch (error) {
    if (error instanceof PostForMe.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
