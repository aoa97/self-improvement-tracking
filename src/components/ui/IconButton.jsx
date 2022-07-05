import React from "react";

export default function IconButton({ icon, ...props }) {
  return <button {...props}>{icon}</button>;
}
