import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

function ForumTopicList({currentUrl}) {

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

    const { loading, error, data } = useQuery(TOPIC_LIST, { variables: { categoryId: 12 } });

    console.log(currentUrl);
    console.log(data);
    console.log(loading);
    console.log(error);

return (<div>Hello</div>)
}

export default ForumTopicList;
