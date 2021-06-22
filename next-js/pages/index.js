import React from "react";
import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <>
      <h1>First Next App</h1>
      <p>Hello you!</p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}>
              <a>
                <strong>{p.title}</strong>
              </a>
            </Link>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};

export default Index;
