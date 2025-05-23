import React, { ChangeEventHandler } from 'react';

interface FormToggleProps {
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler;
  disabled?: boolean;
}

export const FormToggle: React.FC<FormToggleProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={checked} onChange={onChange} className="checkbox" />
      <span>{label}</span>
    </label>
  );
};
