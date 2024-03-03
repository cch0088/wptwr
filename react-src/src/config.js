import { getRoot } from "./lib/validation";

// Use forward slash (/) if root is same as site
export const WP_ROOT = "WordPress";

// GraphQL defaults
export const GRAPHQL_URI = getRoot(WP_ROOT) + "graphql";

// WordPress defaults
export const WP_UPLOADS = getRoot(WP_ROOT) + "wp-content/uploads";
export const API_PAGES = getRoot(WP_ROOT) + "wp-json/wp/v2/pages/?slug=";
export const API_POSTS = getRoot(WP_ROOT) + "wp-json/wp/v2/posts/?slug=";
export const API_CATEGORIES = getRoot(WP_ROOT) + "wp-json/wp/v2/categories";

// User accounts page
export const UI_ACCOUNT = "wp-admin";
