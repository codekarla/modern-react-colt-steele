import React from "react";
import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <>
      <h1>First Next App</h1>
      <p>Hello you!</p>
      <h2>Tables:</h2>
      <div>
        <Link href="/posts">
          <h3 className="table-link">Posts</h3>
        </Link>
        <Link href="/users">
          <h3 className="table-link">Users</h3>
        </Link>
      </div>
      <hr />
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}>
              <a>{p.title}</a>
            </Link>
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
