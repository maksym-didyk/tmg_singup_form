import React, { FC } from 'react';
import classNames from 'classnames';
import { ErrorsType } from '../types/typedefs';

interface Props {
  type: string;
  name?: string;
  value: string;
  placeholder: string;
  errorstype?: ErrorsType;
  errors: ErrorsType[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<Props> = ({
  type,
  name,
  value,
  placeholder,
  errorstype,
  errors,
  onChange,
}) => {
  const displayName = typeof name !== 'undefined' ? name : type;
  const displayErrorsType = typeof errorstype !== 'undefined'
    ? errorstype
    : ErrorsType.none;

  return (
    <div className="field">
      <div className="">
        <input
          type={type}
          name={displayName}
          className={classNames({
            [`singupform__input input-icon input-icon-${displayName}`]: true,
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
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
