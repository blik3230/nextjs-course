import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface GeneralLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
