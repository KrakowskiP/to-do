import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [checked, setChecked] = useState(false);

    setChecked(checked);

  return (
    <div>
      <Checkbox
        value={checked}
        type="checkbox"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
