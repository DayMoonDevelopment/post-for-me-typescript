import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.media.createUploadURL',
    fullyQualifiedName: 'media.createUploadURL',
    httpMethod: 'post',
    httpPath: '/v1/media/create-upload-url',
  },
  {
    clientCallName: 'client.socialPosts.create',
    fullyQualifiedName: 'socialPosts.create',
    httpMethod: 'post',
    httpPath: '/v1/social-posts',
  },
  {
    clientCallName: 'client.socialPosts.retrieve',
    fullyQualifiedName: 'socialPosts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/social-posts/{id}',
  },
  {
    clientCallName: 'client.socialPosts.update',
    fullyQualifiedName: 'socialPosts.update',
    httpMethod: 'put',
    httpPath: '/v1/social-posts/{id}',
  },
  {
    clientCallName: 'client.socialPosts.list',
    fullyQualifiedName: 'socialPosts.list',
    httpMethod: 'get',
    httpPath: '/v1/social-posts',
  },
  {
    clientCallName: 'client.socialPosts.delete',
    fullyQualifiedName: 'socialPosts.delete',
    httpMethod: 'delete',
    httpPath: '/v1/social-posts/{id}',
  },
  {
    clientCallName: 'client.socialPostResults.retrieve',
    fullyQualifiedName: 'socialPostResults.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/social-post-results/{id}',
  },
  {
    clientCallName: 'client.socialPostResults.list',
    fullyQualifiedName: 'socialPostResults.list',
    httpMethod: 'get',
    httpPath: '/v1/social-post-results',
  },
  {
    clientCallName: 'client.socialAccounts.create',
    fullyQualifiedName: 'socialAccounts.create',
    httpMethod: 'post',
    httpPath: '/v1/social-accounts',
  },
  {
    clientCallName: 'client.socialAccounts.retrieve',
    fullyQualifiedName: 'socialAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/social-accounts/{id}',
  },
  {
    clientCallName: 'client.socialAccounts.update',
    fullyQualifiedName: 'socialAccounts.update',
    httpMethod: 'patch',
    httpPath: '/v1/social-accounts/{id}',
  },
  {
    clientCallName: 'client.socialAccounts.list',
    fullyQualifiedName: 'socialAccounts.list',
    httpMethod: 'get',
    httpPath: '/v1/social-accounts',
  },
  {
    clientCallName: 'client.socialAccounts.createAuthURL',
    fullyQualifiedName: 'socialAccounts.createAuthURL',
    httpMethod: 'post',
    httpPath: '/v1/social-accounts/auth-url',
  },
  {
    clientCallName: 'client.socialAccounts.disconnect',
    fullyQualifiedName: 'socialAccounts.disconnect',
    httpMethod: 'post',
    httpPath: '/v1/social-accounts/{id}/disconnect',
  },
  {
    clientCallName: 'client.socialAccountFeeds.list',
    fullyQualifiedName: 'socialAccountFeeds.list',
    httpMethod: 'get',
    httpPath: '/v1/social-account-feeds/{social_account_id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
