import React, { FC } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { ErrorsType } from '../types/typedefs';

interface Props {
  cheked: boolean;
  errors: ErrorsType[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxMUI: FC<Props> = ({
  cheked,
  errors,
  onChange,
}) => {
  const boxColor = errors.includes(ErrorsType.checkbox) ? '#da5050' : '#6ceec7';

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={(
            <Checkbox
              onChange={onChange}
              checked={cheked}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                color: `${boxColor}`,
                '&.Mui-checked': {
                  color: `${boxColor}`,
                },
              }}
            />
          )}
          label=""
        />

      </FormGroup>
    </div>
  );
};
