import * as React from 'react';
import { useAccordion } from './useAccordion';
import { AccordionProps } from './Accordion.types';
import { renderAccordion } from './renderAccordion';

/**
 * Define a styled Accordion, using the `useAccordion` and `useAccordionStyles` hooks.
 * {@docCategory Accordion}
 */
export const Accordion = React.forwardRef<HTMLElement, AccordionProps>((props, ref) => {
  const state = useAccordion(props, ref);

  return renderAccordion(state);
});

Accordion.displayName = 'Accordion';
