// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'post-for-me';
import { McpOptions } from './options';

export const parseClientAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        if (!value.trim()) throw new Error('Missing bearer token.');
        return { apiKey: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Bearer).',
        );
    }
  }

  const apiKey =
    Array.isArray(req.headers['x-post-for-me-api-key']) ?
      req.headers['x-post-for-me-api-key'][0]
    : req.headers['x-post-for-me-api-key'];
  if (required && !apiKey?.trim()) {
    throw new Error('Missing API key. Provide Authorization: Bearer <key> or x-post-for-me-api-key.');
  }
  return { apiKey };
};

export const getStainlessApiKey = (req: IncomingMessage, mcpOptions: McpOptions): string | undefined => {
  // Try to get the key from the x-stainless-api-key header
  const headerKey =
    Array.isArray(req.headers['x-stainless-api-key']) ?
      req.headers['x-stainless-api-key'][0]
    : req.headers['x-stainless-api-key'];
  if (headerKey && typeof headerKey === 'string') {
    return headerKey;
  }

  // Fall back to value set in the mcpOptions (e.g. from environment variable), if provided
  return mcpOptions.stainlessApiKey;
};
