import React from "react";
import axios from "axios";
import Table from "../components/BasicTable";
import { capitalize } from "../utils";

const UserTable = ({ users }) => {
  const getColumns = (schema) => {
    if (schema)
      return Object.keys(schema)
        .filter((key) => key !== "company")
        .map((key) => {
          let header = capitalize(key);
          if (typeof schema[key] == "object") {
            return {
              columns: getColumns(schema[key], key),
              Header: header,
              Footer: header,
            };
          } else {
            return {
              accessor: key,
              Header: header,
              Footer: header,
            };
          }
        });
  };

  const columns = getColumns(users[0]);

  console.log(columns);

  return (
    <>
      <h2>All Users</h2>
      <p>. . .</p>
      {columns && <Table columns={columns} data={users} />}
    </>
  );
};

UserTable.getInitialProps = async () => {
  const res = await axios.get("http://jsonplaceholder.typicode.com/users");
  const { data } = res;
  return { users: data };
};

export default UserTable;
