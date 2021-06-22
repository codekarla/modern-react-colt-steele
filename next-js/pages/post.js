import React from "react";
import axios from "axios";
import { removeComments } from "convert-source-map";

function Post({ id, data }) {
  return (
    <div>
      <h1>Comments for Post #{id}</h1>
      <ul>
        {data.map((c) => (
          <li key={c.id}>
            <h4>{c.email}</h4>
            <p>
              {c.name} ~ {c.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { ...query, data };
};

export default Post;
