import { EntityState } from '@reduxjs/toolkit';
import { store } from '../../store';
import { Todo } from '../../types/tods';
import { AppState } from '../App/AppState';
import ApiSelector from './ApiSelector';

it('InitialStateを取得できること。', () => {
  const state = store.getState();
  const actual = ApiSelector(state);
  const exp: EntityState<Todo> & AppState = {
    entities: {},
    ids: [],
    isLoading: false,
  };
  expect(actual).toStrictEqual(exp);
});
