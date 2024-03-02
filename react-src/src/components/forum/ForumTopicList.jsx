import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

function ForumTopicList({categoryId}) {

    const [message, setMessage] = useState(null);

    const TOPIC_LIST = gql`
        query getPostsByCategory(
                $categoryId: Int = 1
            )
        {
            posts(where: {categoryId: $categoryId}) {
                edges {
                    node {
                    title
                    author {
                        node {
                            name
                        }
                    }
                        date
                    }
                }
            }
        }`;

    const { loading, error, data } = useQuery(TOPIC_LIST, {variables: {categoryId}});

    console.log(data);

return (<div>Hello</div>)
}

export default ForumTopicList;
