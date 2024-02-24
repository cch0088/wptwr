import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    "id": 1,
    "count": 1,
    "description": "",
    "link": "https://localhost/WordPress/category/uncategorized/",
    "name": "Uncategorized",
    "slug": "uncategorized",
    "taxonomy": "category",
    "parent": 0,
    "meta": [],
    "_links": {
      "self": [
        {
          "href": "https://localhost/WordPress/wp-json/wp/v2/categories/1"
        }
      ],
      "collection": [
        {
          "href": "https://localhost/WordPress/wp-json/wp/v2/categories"
        }
      ],
      "about": [
        {
          "href": "https://localhost/WordPress/wp-json/wp/v2/taxonomies/category"
        }
      ],
      "wp:post_type": [
        {
          "href": "https://localhost/WordPress/wp-json/wp/v2/posts?categories=1"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  }
];

export const forumSlice = createSlice({
    name: 'forumContent',
    initialState: { value: initialStateValue },
    reducers: {
       pushForumContent: (state, action) => {
        state.value = action.payload;
       },
       purgeForumContent: (state) => {
        state.value = initialStateValue;
       } 
    }
});

export const { pushForumContent, purgeForumContent } = forumSlice.actions;

export default forumSlice.reducer;
