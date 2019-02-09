import React from "react";
// This file exports both the List and ListItem components

// List format for DB holding
export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <li className="list-group-item list-group-item-success list-group-item-action"><h1><strong>Your Holdings</strong></h1></li>
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item list-group-item-dark list-group-item-action">{children}</li>;
}