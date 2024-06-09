import { gql } from "@apollo/client";

export const LOG_IN = gql`
    mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: { login: $login password: $password })
    { status } }`;

export const LOG_OUT = gql`
    mutation logOut {
        logout(input: {})
        { status }
    }`;

export const GET_USER = gql`
    query getUser {
        viewer {
            id
            databaseId
            username
            firstName
            lastName
            email
            capabilities
            avatar {
                url
            }
        }
    }`;

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

export const DELETE_USER = gql`
    mutation deleteUser(
        $id: ID!
    ) {
        deleteUser(
            input: {
                id: $id
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
            author { node { databaseId name } }
            isSticky
            editingLockedBy { node { databaseId name } }
        }
    }
}`;

export const EVENTS_LIST = gql`
query getPostsByCategory(
        $categoryName: String!
    )
{
    posts(where: {categoryName: $categoryName}) {
        nodes {
            postId
            title
            date
            content
            author { node { databaseId name } }
            isSticky
            editingLockedBy { node { databaseId name } }
        }
    }
}`;

export const FORUM_NEW_TOPIC = gql`
    mutation newPost($slug: String!, $title: String!, $content: String!) {
        createPost(
        input: {
            clientMutationId: "CreatePost",
            title: $title,
            content: $content,
            categories: {
                nodes: {slug: $slug}
            },
            status: PUBLISH
        } ) {
        post {
            postId
        } }
}`;

export const FORUM_GET_POSTS = gql`
query getPostById($postId: Int!) {
    posts(where: {id: $postId}) {
    nodes {
        databaseId
        title
        content
        author { node {
            databaseId
            name
            avatar { url } } }
        date
        comments(where: {orderby: COMMENT_DATE, order: ASC}) {
        edges { node {
            databaseId
            content
            date
            author { node {
                databaseId
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

export const LATEST_POSTS = gql`
query GetPosts {
posts(first: 5, where: {categoryName: "all"}) {
        edges {
            node {
                title
                date
                databaseId
                uri
                author {
                    node {
                        databaseId
                        name
                        avatar {
                            url
                        }
                    }
                }
            }
        }
    }
}`;
