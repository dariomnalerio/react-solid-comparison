import { Accessor, Setter } from 'solid-js';

export type Todo = {
  id: string;
  task: string;
  completed: Accessor<boolean>;
  setCompleted: Setter<boolean>;
};
