import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./Firebase";

export default function TodoListItem({ todo, InProgress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      InProgress: !InProgress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={InProgress ? "In Progress" : "Completed"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {InProgress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}