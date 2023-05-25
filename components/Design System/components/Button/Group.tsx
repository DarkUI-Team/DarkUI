'use client';

import React, { PropsWithChildren, cloneElement, isValidElement } from 'react';
import cs from './scss/button.module.scss';
import { type IButton } from './Button';

export interface IGroup extends IButton, PropsWithChildren {
  children: any[];
}

const Group: React.FC<IGroup> = (props: IGroup) => {
  const { children, ...rest } = props;

  return (
    <menu className={cs.group}>
      {children.map((child: any, index) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, { key: index, ...rest });
      })}
    </menu>
  );
};

export default Group;
