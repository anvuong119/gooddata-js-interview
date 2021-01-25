import React from 'react';
import styles from './Footer.module.scss';

export interface FooterProps {
  links?: Array<{
    key?: string;
    title: React.ReactNode;
    href: string;
    blankTarget?: boolean;
  }>;
  copyright?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({ links, copyright }) => (
  <footer className={styles.footer}>
    {links && (
      <div className={styles.links}>
        {links.map((link) => (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            key={link.key}
            title={link.key}
            target={link.blankTarget ? '_blank' : '_self'}
            href={link.href}
          >
            {link.title}
          </a>
        ))}
      </div>
    )}
    {copyright && <div className={styles.copyright}>{copyright}</div>}
  </footer>
);
