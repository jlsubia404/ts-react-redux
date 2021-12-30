import { FetchTodosAction, DeleteTodoAction } from ".";
export enum ActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  DELETE_TODO = "DELETE_TODO",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE",
}

export type Action = FetchTodosAction | DeleteTodoAction;
