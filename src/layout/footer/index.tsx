import React from 'react';
import style from './style.scss';

interface Props {
  children:any
}

const Footer = ({ children }:Props) => (
  <div className={style.footer}>{children}</div>
);

export default Footer;
