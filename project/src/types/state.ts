import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;//возвращает тип из редьюсера - новый объект состояния

export type AppDispatch = typeof store.dispatch;//используем для того чтобы отправить действие на обновление
