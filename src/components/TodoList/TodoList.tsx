import React from 'react';
import { Todo, User } from '../../types';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
  users: User[];
};

export const TodoList: React.FC<Props> = ({ todos, users }) => {
  const usersMap = React.useMemo(() => {
    return Object.fromEntries(users.map(user => [user.id, user]));
  }, [users]);

  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = usersMap[todo.userId];

        return <TodoInfo key={todo.id} todo={todo} user={user} />;
      })}
    </section>
  );
};
