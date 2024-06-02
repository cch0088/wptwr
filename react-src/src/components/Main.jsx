import React from "react";
import MainMenu from "./MainMenu"
import { API_PAGES, WP_ROOT } from "../config";
import { useQuery } from "@apollo/client";
import { LATEST_POSTS } from "../gql";
import { getDateFromString, getRoot } from "../lib/validation";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const menuRoute = API_PAGES + "main-menu";
    const { loading, error, data } = useQuery(LATEST_POSTS);

    const navigate = useNavigate();

    return (
        <div>
            <div id="heading-container"><h2>Quick Links</h2></div>
            <MainMenu route={menuRoute} />
            {!error && !loading &&
            <>
                <div id="heading-container"><h2>Latest Posts</h2></div>
                <div className="forum-section">
                {data.posts.edges.map((post) => (
                    <div key={post.node.databaseId} className="forum-recent" onClick={() => navigate(getRoot(WP_ROOT) + post.node.uri.slice(1, -1))}>
                        <span className="bubble" role="img" aria-label="topic">
                            <img alt="avatar" src={post.node.author.node.avatar.url} />
                        </span>
                        <div>
                            <div className="forum-topic-name">{post.node.title}</div>
                            <div className="forum-topic-description">
                                By {post.node.author.node.name} {getDateFromString(post.node.date)}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </>
            }
        </div>
    )
}
