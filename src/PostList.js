import React from "react";

export default function PostList({ resource }) {
  const posts = resource.posts.read(); // change this

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  );
}
