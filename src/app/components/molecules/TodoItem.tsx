import styled from '@emotion/styled';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Todo } from '../../types/tods';
import Button from '../atoms/Buttons';
import CheckBox from '../atoms/CheckBox';
import Input from '../atoms/Input';

type Props = {
  item: Todo;
  updateDispatch: (item: Todo) => void;
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
        textDecoration: 'line-through',
      }
  );

  return <Component>{text}</Component>;
};

type InputValues = {
  completed: boolean;
  text: string;
};
const TodoItem: React.FC<Props> = ({ item, updateDispatch }) => {
  const [editable, setEditable] = useState<boolean>(false);
  const { getValues, register, control, watch } = useForm<InputValues>();
  const watchCheckBox = watch('completed');

  const save = (item: Todo) => {
    const newTodo: Todo = {
      id: item.id,
      text: getValues('text'),
      completed: getValues('completed'),
      createdAt: item.createdAt,
    };
    updateDispatch(newTodo);
    setEditable(false);
  };

  return (
    <ListItem dense button>
      <ListItemIcon>
        <Controller
          name="completed"
          control={control}
          defaultValue={false}
          render={({ field }) => <CheckBox field={field} />}
        />
      </ListItemIcon>
      {editable ? (
        <Input refs={register('text')} defaultValue={item.text} type="text" />
      ) : (
        <ListItemText
          id={item.id}
          primary={<PrimaryText deleted={watchCheckBox} text={item.text} />}
        />
      )}
      <ListItemSecondaryAction>
        <Button
          onClick={editable ? () => save(item) : () => setEditable(true)}
          label={editable ? 'Save' : 'Edit'}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
