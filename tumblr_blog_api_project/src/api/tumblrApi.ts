import fetch from "node-fetch";

/**
 * Tumblr API v1 returns JSONP.
 * This function removes the callback wrapper and returns pure JSON.
 */
export async function fetchTumblrData(blogName: string): Promise<any> {
  const url = `https://${blogName}.tumblr.com/api/read/json`;

  const response = await fetch(url);
  const text = await response.text();

  // Remove JSONP callback
  const jsonText = text.replace(/^var tumblr_api_read = /, "").replace(/;$/, "");

  return JSON.parse(jsonText);
}
