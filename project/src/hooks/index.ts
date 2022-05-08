import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();//типизируем - добавляем доп обертку к нашему хуку

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
