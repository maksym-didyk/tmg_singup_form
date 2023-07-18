import React, { FC } from 'react';
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
        <div className="select is-success input-icon input-icon-country">
          <select
            id={id}
            value={value}
            onChange={onChange}
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

      </div>
      {errors.includes(displayErrorsType) && (
        <p className="help is-danger">
          {displayErrorsType}
        </p>
      )}
    </div>
  );
};
