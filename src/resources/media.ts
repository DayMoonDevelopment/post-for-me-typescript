// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Media extends APIResource {
  /**
   * To upload media to attach to your post, make a `POST` request to the
   * `/media/create-upload-url` endpoint.
   *
   * You'll receive the public url of your media item (which can be used when making
   * a post) and will include an `upload_url` which is a signed URL of the storage
   * location for uploading your file to.
   *
   * This URL is unique and publicly signed for a short time, so make sure to upload
   * your files in a timely manner.
   *
   * **Example flow using JavaScript and the Fetch API:**
   *
   * **Request an upload URL**
   *
   * ```js
   * // Step 1: Request an upload URL from your API
   * const response = await fetch(
   *   "https://api.postforme.dev/v1/media/create-upload-url",
   *   {
   *     method: "POST",
   *     headers: {
   *       "Content-Type": "application/json",
   *     },
   *   }
   * );
   *
   * const { media_url, upload_url } = await response.json();
   * ```
   *
   * **Upload your file to the signed URL**
   *
   * ```js
   * // Step 2: Upload your file to the signed URL
   * const file = /* your File or Blob object, e.g., from an <input type="file"> * /;
   * await fetch(upload_url, {
   *   method: 'PUT',
   *   headers: {
   *     'Content-Type': 'image/jpeg'
   *   },
   *   body: file
   * });
   * ```
   *
   * **Use the `media_url` when creating your post**
   *
   *     ```js
   *     // Step 3: Use the `media_url` when creating your post
   *     const response = await fetch('https://api.postforme.dev/v1/social-posts', {
   *       method: 'POST',
   *       headers: {
   *         'Content-Type': 'application/json'
   *       },
   *       body: JSON.stringify({
   *         social_accounts: ['spc_...', ...],
   *         caption: 'My caption',
   *         media: [
   *           {
   *             url: media_url
   *           }
   *         ]
   *       })
   *     });
   *     ```
   */
  createUploadURL(options?: RequestOptions): APIPromise<MediaCreateUploadURLResponse> {
    return this._client.post('/v1/media/create-upload-url', options);
  }
}

export interface MediaCreateUploadURLResponse {
  /**
   * The public URL for the media, to use once file has been uploaded
   */
  media_url: string;

  /**
   * The signed upload URL for the client to upload the file
   */
  upload_url: string;
}

export declare namespace Media {
  export { type MediaCreateUploadURLResponse as MediaCreateUploadURLResponse };
}
