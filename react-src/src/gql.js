import { gql } from "@apollo/client";

export const LOG_IN = gql`
    mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: { login: $login password: $password })
    { status } }`;

export const REGISTER_USER = gql`
    mutation registerUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        registerUser(
            input: {
            username: $username
            email: $email
            password: $password
            }
        ) { user { databaseId } }
    }`;

export const RESET_PASSWORD = gql`
    mutation resetUserPassword(
        $key: String!
        $login: String!
        $password: String!) {
        resetUserPassword(
            input: {
                key: $key
                login: $login
                password: $password
            }) {
            user { databaseId } } }`;

export const SEND_PASSWORD_RESET_EMAIL = gql`
    mutation sendPasswordResetEmail($username: String!) {
    sendPasswordResetEmail(
        input: { username: $username }
    ) { user { databaseId } } }`;

export const TOPIC_LIST = gql`
query getPostsByCategory(
        $categoryId: Int!
    )
{
    posts(where: {categoryId: $categoryId}) {
        nodes {
            postId
            title
            date
            author { node { name } }
            isSticky
            editingLockedBy { node { name } }
        }
    }
}`;

export const FORUM_NEW_TOPIC = gql`
    mutation newPost($id: Int!, $content: String!, $title: String!) {
        createPost(
        input: {
            clientMutationId: "CreatePost",
            categories: {nodes: {id: $id}},
            title: $title,
            content: $content
        }
        ) {
        post {
                id
                title
                date
            }
        }
    }
`;

export const FORUM_GET_POSTS = gql`
query getPostById($postId: Int!) {
    posts(where: {id: $postId}) {
    nodes {
        databaseId
        title
        content
        author { node {
            name
            avatar { url } } }
        date
        comments(where: {orderby: COMMENT_DATE, order: ASC}) {
        edges { node {
            databaseId
            content
            date
            author { node {
                name
                avatar { url } } } } } } } } }`;

export const FORUM_REPLY = gql`
mutation setReply($commentOn: Int!, $content: String!) {
    createComment(input: {
            content: $content,
            commentOn: $commentOn
    })
    {
        clientMutationId
        success
    }
}`;
