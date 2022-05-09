import { useState } from 'react';
import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import SortItem from '../sort-item/sort-item';

function SortList(): JSX.Element {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const sortType = useAppSelector((state) => state.sortType);
  return (
    <form onClick={(evt) => { evt.preventDefault(); return setIsOpenOptions(!isOpenOptions); }} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpenOptions &&
        <ul className="places__options places__options--custom places__options--opened">
          {
            Object.values(SortType).map((sortIt) => (
              <SortItem key={sortIt} sortType={sortIt} />
            ))
          }
        </ul>}

    </form>
  );
}

export default SortList;
