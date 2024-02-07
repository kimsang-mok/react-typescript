import React from "react";

interface OscarProps {
  children: React.ReactNode;
}

function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}

export default Oscar;
