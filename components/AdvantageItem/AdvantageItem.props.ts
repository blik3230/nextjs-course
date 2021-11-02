import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface AdvantageItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  titleContent: ReactNode;
}
