import React from 'react';
import axios from 'axios';
import Table from '../../components/BasicTable';
import { capitalize } from '../../utils';

const PostTable = ({ posts }) => {
    const columns = Object.keys(posts[0]).map((key) => {
        let header = capitalize(key);
        return {
            accessor: key,
            Header: header,
            Footer: header,
        };
    });
    return (
        <>
            <h2>All Posts</h2>
            <Table columns={columns} data={posts} />
        </>
    );
};

PostTable.getInitialProps = async () => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
    const { data } = res;
    return { posts: data };
};

export default PostTable;
