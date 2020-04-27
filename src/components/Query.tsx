import React, { FunctionComponent } from "react";
import { useQuery } from "react-apollo";
import { DocumentNode } from "graphql";

interface QueryProps {
  children: FunctionComponent;
  query: DocumentNode;
  id?: string;
}

const Query: React.FC<QueryProps> = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, { variables: { id: id } });
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return children(data);
};

export default Query;
