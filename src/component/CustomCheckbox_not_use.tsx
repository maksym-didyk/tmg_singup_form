import React, { FC } from 'react';

interface Props {
  name?: string;
}

export const CustomCheckbox_: FC<Props> = ({
  name,
}) => {
  return (
    <div className="field">
      <input
        type="checkbox"
        name={name}
        className="singupform__checkbox"
      />
      I agree to the
      {' '}
      <a href="/#" className="singupform__link">Terms & Conditions</a>

    </div>
  );
};
