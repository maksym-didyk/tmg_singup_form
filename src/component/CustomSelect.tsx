import React, { FC } from 'react';
import classNames from 'classnames';
import listCountry from '../api/countries.json';
import { ErrorsType } from '../types/typedefs';

interface Props {
  id: string;
  value: number;
  errorstype?: ErrorsType;
  errors: ErrorsType[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CustomSelect: FC<Props> = ({
  id,
  value,
  errorstype,
  errors,
  onChange,
}) => {
  const displayErrorsType = typeof errorstype !== 'undefined'
    ? errorstype
    : ErrorsType.none;

  return (
    <div className="field">
      <div className="control">
        <select
          id={id}
          value={value}
          onChange={onChange}
          // eslint-disable-next-line max-len
          className="singupform__input singupform__select input-icon input-icon-country"
        >
          <option value="0" disabled>Country</option>
          {listCountry.map(c => (
            <option
              value={c.id}
              key={c.id}
            >
              {c.country}
            </option>
          ))}
        </select>

      </div>
      <p className={classNames('help is-danger', {
        'singupform__errors-hidden': !errors.includes(displayErrorsType),
      })}
      >
        {displayErrorsType}
      </p>
    </div>
  );
};
