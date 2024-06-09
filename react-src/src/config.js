import { getRoot } from "./lib/validation";

// Use forward slash (/) if root is same as site
export const WP_ROOT = "WordPress";

// GraphQL defaults
export const GRAPHQL_URI = getRoot(WP_ROOT) + "graphql";

// WordPress defaults
export const WP_UPLOADS = getRoot(WP_ROOT) + "wp-content/uploads";
export const API_PAGES = getRoot(WP_ROOT) + "wp-json/wp/v2/pages/?slug=";
export const API_POSTS = getRoot(WP_ROOT) + "wp-json/wp/v2/posts/";
export const API_USERS = getRoot(WP_ROOT) + "wp-json/wp/v2/users/";
export const API_CATEGORIES = getRoot(WP_ROOT) + "wp-json/wp/v2/categories?per_page=100";

// User accounts page
export const UI_ACCOUNT = getRoot(WP_ROOT) + "user";

// Temporary account removal page
export const UI_ACCOUNT_DELETE = getRoot(WP_ROOT) + "wp-admin/options.php?page=plugin_delete_me_confirmation";

// Forum pages
export const UI_FORUM = getRoot(WP_ROOT) + "forum";
export const UI_FORUM_THREADS = getRoot(WP_ROOT) + "forum/threads";
export const UI_FORUM_TOPIC = getRoot(WP_ROOT) + "forum/threads/post";

// Meetup pages
export const UI_MEETUPS = getRoot(WP_ROOT) + "meetups";

// Privacy policy page
export const UI_PRIVACY_SLUG = "privacy-policy";
export const UI_PRIVACY = getRoot(WP_ROOT) + UI_PRIVACY_SLUG;

// Contact form page
export const UI_CONTACT = getRoot(WP_ROOT) + "contact-form";
