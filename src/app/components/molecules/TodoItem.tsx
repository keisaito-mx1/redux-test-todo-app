import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useEffect, useState } from "react";
import { Controller, useForm, UseFormWatch } from "react-hook-form";
import { updateTodoAction } from "../../feature/ApiTodo/ApiTodoActions";
import ApiTodoSlice from "../../feature/ApiTodo/ApiTodoSlice";
import { useAppDispatch } from "../../hooks";
import { TodoEntitiy } from "../../types/tods";
import Button from "../atoms/Buttons";
import CheckBox from "../atoms/CheckBox";
import Input from "../atoms/Input";

type Props = {
  item: TodoEntitiy;
};

const PrimaryText: React.FC<{ text: string; deleted: boolean }> = ({
  text,
  deleted,
}) => {
  const Component = styled.p(
    {
      margin: 0,
    },
    () =>
      deleted && {
        textDecoration: "line-through",
      }
  );

  return <Component>{text}</Component>;
};

type InputValues = {
  completed: boolean;
  text: string;
};

const TodoItem: React.FC<Props> = ({ item }) => {
  const [editable, setEditable] = useState<boolean>(false);
  const { register, control, getValues, watch } = useForm<InputValues>();
  const dispatch = useAppDispatch();

  const save = () => {
    const newValue: TodoEntitiy = {
      ...item,
      text: getValues("text"),
      completed: getValues("completed"),
    };
    dispatch(updateTodoAction({ todo: newValue }));
    setEditable(false);
  };
  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change" && name === "completed") {
        const newValue: TodoEntitiy = {
          ...item,
          completed: value.completed,
        };
        dispatch(ApiTodoSlice.actions.updateTodo({ todo: newValue }));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  watch((value, { name, type }) => {
    if (type === "change" && name === "completed") {
      const newValue: TodoEntitiy = {
        ...item,
        completed: value.completed,
      };
      dispatch(ApiTodoSlice.actions.updateTodo({ todo: newValue }));
    }
  });

  return (
    <ListItem dense button>
      <ListItemIcon>
        <Controller
          name="completed"
          control={control}
          defaultValue={item.completed}
          render={({ field }) => <CheckBox field={field} />}
        />
      </ListItemIcon>
      {editable ? (
        <Input refs={register("text")} defaultValue={item.text} type="text" />
      ) : (
        <ListItemText
          id={item.id}
          primary={<PrimaryText deleted={item.completed} text={item.text} />}
        />
      )}
      <ListItemSecondaryAction>
        <Button
          type="button"
          onClick={editable ? () => save() : () => setEditable(true)}
          label={editable ? "Save" : "Edit"}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
