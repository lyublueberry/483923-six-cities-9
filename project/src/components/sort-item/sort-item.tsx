import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/action';

type SortItemProps = {
  sortType: string;
}

function SortItem({ sortType }: SortItemProps): JSX.Element {
  const currentSort = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  return (
    <li className={`places__option ${currentSort === sortType ? ' places__option--active' : ''}`}
      tabIndex={0}
      key={sortType}
      onClick={
        (evt: MouseEvent) => {
          evt.preventDefault();
          dispatch(changeSortType(sortType));
        }
      }
    >
      {sortType}
    </li>
  );
}

export default SortItem;
