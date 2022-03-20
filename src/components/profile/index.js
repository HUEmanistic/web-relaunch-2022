import React from "react";
import { useParams } from "react-router-dom";


export default function Profile({ children, ...restProps }) {
  const { name } = useParams();
  return (
    <>
          <h1>{name}</h1>
      <p>Hi</p>
    </>
  );
}
