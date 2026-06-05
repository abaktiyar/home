declare module 'react-anchor-link-smooth-scroll' {
  import * as React from 'react';

  interface AnchorLinkProps {
    href: string;
    className?: string;
    onClick?: () => void;
    'aria-label'?: string;
    children?: React.ReactNode;
  }

  const AnchorLink: React.FC<AnchorLinkProps>;
  export default AnchorLink;
}
