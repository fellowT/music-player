import React from 'react';
import style from './style.module.scss';

interface Props {
  children:any
}

const Footer = ({ children }:Props) => (
  <div className={style.footer}>{children}</div>
);

export default Footer;
