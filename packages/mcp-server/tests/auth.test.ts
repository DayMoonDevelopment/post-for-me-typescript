import { IncomingMessage } from 'node:http';
import { parseClientAuthHeaders } from '../src/auth';

const request = (headers: IncomingMessage['headers']) => ({ headers }) as IncomingMessage;

describe('request API keys', () => {
  it('accepts either supported header and gives Bearer precedence', () => {
    expect(parseClientAuthHeaders(request({ 'x-post-for-me-api-key': 'key-a' }), true)).toEqual({
      apiKey: 'key-a',
    });
    expect(
      parseClientAuthHeaders(
        request({ authorization: 'Bearer key-b', 'x-post-for-me-api-key': 'key-a' }),
        true,
      ),
    ).toEqual({ apiKey: 'key-b' });
  });

  it.each([{}, { authorization: 'Bearer ' }, { 'x-post-for-me-api-key': '  ' }])(
    'rejects missing or empty credentials: %p',
    (headers) => {
      expect(() => parseClientAuthHeaders(request(headers), true)).toThrow();
    },
  );
});
