import { fetchTumblrData } from "../api/tumblrApi.js";
import type { TumblrResponse } from "../models/TumblrResponse.js";

/**
 * Handles business logic related to Tumblr data
 */
export class TumblrService {
  async processBlog(blogName: string, start: number, end: number) {
    const data: TumblrResponse = await fetchTumblrData(blogName);

    // Blog basic info
    console.log("\n---------------- BLOG INFO ----------------");
    console.log("Title:", data.tumblelog.title);
    console.log("Name:", data.tumblelog.name);
    console.log("Description:", data.tumblelog.description);
    console.log("No of Posts:", data.tumblelog.posts);

    console.log("\n------------- IMAGE URLS ------------------");

    // Adjust index (Tumblr posts are 0-based)
    const selectedPosts = data.posts.slice(start - 1, end);

    selectedPosts.forEach((post, index) => {
      if (post.type === "photo" && post.photos) {
        post.photos.forEach(photo => {
          console.log(`Post ${start + index}: ${photo.photo_url_1280}`);
        });
      }
    });
  }
}
