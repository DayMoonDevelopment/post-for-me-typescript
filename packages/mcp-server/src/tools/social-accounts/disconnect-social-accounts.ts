// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/social-accounts/{id}/disconnect',
  operationId: 'SocialAccountsController_disconnectSocialAccount_v1',
};

export const tool: Tool = {
  name: 'disconnect_social_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDisconnecting an account with remove all auth tokens and mark the account as disconnected. The record of the account will be kept and can be retrieved and reconnected by the owner of the account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'The unique identifier of the social account'\n    },\n    external_id: {\n      type: 'string',\n      description: 'The external id of the social account'\n    },\n    platform: {\n      type: 'string',\n      description: 'The platform of the social account'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of the account',\n      enum: [        'disconnected'\n      ]\n    },\n    username: {\n      type: 'string',\n      description: 'The platform\\'s username of the social account'\n    }\n  },\n  required: [    'id',\n    'external_id',\n    'platform',\n    'status',\n    'username'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.socialAccounts.disconnect(id)));
};

export default { metadata, tool, handler };
