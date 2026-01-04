// Represents minimal Tumblr API v1 response structure
export interface TumblrPost {
  type: string;
  photos?: {
    photo_url_1280: string;
  }[];
}

export interface TumblrResponse {
  tumblelog: {
    title: string;
    description: string;
    name: string;
    posts: number;
  };
  posts: TumblrPost[];
}
