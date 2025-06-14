'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import DaisyDropdown, {
  DaisyDropdownAlignment,
  DaisyDropdownDirection,
  DaisyDropdownModifier,
  DaisyDropdownProps
} from '.';

export default function DaisyDropdownForm({}: DaisyDropdownProps) {
  const [alignment, setAlignment] = useState<DaisyDropdownAlignment>(DaisyDropdownAlignment.Start);
  const [direction, setDirection] = useState<DaisyDropdownDirection>(DaisyDropdownDirection.Top);
  const [modifier, setModifier] = useState<DaisyDropdownModifier>();

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Variant',
      value: alignment,
      options: Object.values(DaisyDropdownAlignment),
      onChange: (e) => setAlignment(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Direction',
      value: direction,
      options: Object.values(DaisyDropdownModifier),
      onChange: (e) => setDirection(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Modifier',
      value: modifier,
      options: Object.values(DaisyDropdownModifier),
      onChange: (e) => setModifier(e.target.value)
    }
  ];

  // No relevant props currently available
  const ToggleFields: FormField[] = [];

  return (
    <>
      <FormWrapper>
        <FormColumnPanel size="2/3" fields={DropdownFields} />
        <FormColumnPanel size="1/3" fields={ToggleFields} />
      </FormWrapper>

      {/* Render the Button */}
      <div className="flex justify-around mt-8 w-full">
        <DaisyDropdown
          label="Sample Dropdown"
          library={LIBRARY_IDS.DAISY}
          alignment={alignment}
          direction={direction}
          modifier={modifier}
        />
        {/* Hidden buttons to get around Tailwind buildtime class names limitation */}
        <div className="hidden">
          <button className="btn btn-soft btn-primary btn-xs">Soft | Primary | Extra Small</button>
          <button className="btn btn-outline btn-secondary btn-sm">
            Outline | Secondary | Small
          </button>
          <button className="btn btn-dash btn-accent btn-md">Dash | Accent | Medium</button>
          <button className="btn btn-active btn-info btn-lg">Active | Info | Large</button>
          <button className="btn btn-ghost btn-success btn-xl">
            Ghost | Success | Extra Large
          </button>
          <button className="btn btn-link btn-warning btn-square">Link | Warning | Square</button>
          <button className="btn btn-widen btn-error btn-circle">Wide | Error | Circle</button>
        </div>
      </div>
    </>
  );
}
