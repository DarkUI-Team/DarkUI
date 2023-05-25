// import React, { JSX } from 'react';

// type DynamicComponentProps<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// // type DynamicComponentProps<T extends keyof JSX.IntrinsicElements> = {
// //   tag: T;
// //   children?: ReactNode;
// // } & JSX.IntrinsicElements[T];

// const DynamicComponent = <T extends keyof JSX.IntrinsicElements>({ tag, ...props }: DynamicComponentProps<T>) => {
//   return <button>asd</button>;
// };

// type DynamicComponentProps<T extends keyof JSX.IntrinsicElements> = { tag: T } & JSX.IntrinsicElements[T];
// // interface IButton extends DynamicComponentProps<any> {
// interface IButton<T extends keyof JSX.IntrinsicElements> {
//   tag: DynamicComponentProps<T>;
//   variant?: 'primary' | 'flat' | 'ghost' | 'text';
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
//   color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
//   animation?: string;
// }
// const DynamicComponent = <T extends IButton<T extends keyof JSX.IntrinsicElements<>>>(props: T) => {
//   const { tag: Tag } = props;
//   //       ^?
//   return <Tag>Test</Tag>;
//   //      ^?
// };
// type DynamicComponentProps<T extends keyof JSX.IntrinsicElements> = ({ tag: T } & JSX.IntrinsicElements[T]) | string;

// interface IButton<T extends keyof JSX.IntrinsicElements | string> {
//   tag: DynamicComponentProps<T>;
//   variant?: 'primary' | 'flat' | 'ghost' | 'text';
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
//   color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
//   animation?: string;
// }

// const DynamicComponent = <T extends keyof JSX.IntrinsicElements | string>(props: IButton<T>) => {
//   const { tag: Tag, ...otherProps } = props;
//   return <Tag {...otherProps}>Test</Tag>;
//   //      ^?
// };

// function DynamicComponent<T: {tag: keyof JSX.IntrinsicElements}>({ tag: T, ...props }: Iprops) = {
//   return <T></T>;
// }

// type DynamicComponentProps<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
//   children: ReactNode;
// } & JSX.IntrinsicElements[T];

// const DynamicComponent<FC>= <T extends keyof JSX.IntrinsicElements>({ tag: Tag, children, ...props }: DynamicComponentProps<T>) => {
//   return <Tag>asd</Tag>;
// };

// export default DynamicComponent;
// type DynamicType<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// function DynamicComponent<T extends keyof JSX.IntrinsicElements>({ tag: T }: DynamicType<T>) {
//   return <div>DynamicComponent</div>;
// }
// type DynamicType<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];

// interface IButton {
//   tag: DynamicType<any>;
// }

// function DynamicComponent<T extends IButton>(props: T) {
//   return <div>DynamicComponent</div>;
// }

// type DynamicType<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// interface IButton<A> {
//   tag?: A extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[A] : unknown;
//   color?: 'purple' | 'gray';
// }

// type DynamicType<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// interface IButton {
//   color: 'purple' | 'gray';
// }

// function DynamicComponent<T extends keyof JSX.IntrinsicElements>({ tag: T }: DynamicType<T> & IButton) {
//   return <div>DynamicComponent</div>;
// }

// type DynamicType<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
//   tag: T;
// };

// interface IButton {
//   color: 'purple' | 'gray';
// }

// function DynamicComponent<T extends keyof JSX.IntrinsicElements>(props: DynamicType<T> & IButton) {
//   return <div>DynamicComponent</div>;
// }
// TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
// type NotDynamicType<T> = {
//   tag: keyof T;
// };
// type DynamicType<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
//   tag: T;
// };

// interface IButton {
//   color: 'purple' | 'gray';
// }

// function DynamicComponent<T>(props: notDynamicType<T> & IButton): any;
// function DynamicComponent<T extends keyof JSX.IntrinsicElements, A>(props: (DynamicType<T> & IButton) | (NotDynamicType<A> & IButton)) {
// function DynamicComponent<T>(props: NotDynamicType<T> & IButton) {
//   const { tag: Tag, children = 'DynamicComponent', ...rest } = props;
//   return <Tag {...rest}>{children}</Tag>;
// }

//123

// function DynamicComponent<T>(props: NotDynamicType<T> & IButton) {
//   const { tag: Tag, children = 'DynamicComponent', ...rest } = props;
//   return <Tag {...rest}>{children}</Tag>;
// }

//123
// function DynamicComponent<T extends keyof JSX.IntrinsicElements>(props: (DynamicType<T> & IButton) | (NotDynamicType<T> & IButton)) {
//   const { tag: Tag, children = 'DynamicComponent', ...rest } = props;
//   return <Tag {...rest}>{children}</Tag>;
// }

// function DynamicComponent(props: notDynamicType) {
// function DynamicComponent<T extends keyof JSX.IntrinsicElements>(props: DynamicType<T> & IButton) {
// function DynamicComponent<T extends keyof JSX.IntrinsicElements>(props: DynamicType<T> & IButton) {
//   const { tag: Tag } = props;
//   return <Tag href="/test">DynamicComponent</Tag>;
// }

// type IButton<T> = {
//   tag?: T;
//   color?: 'purple' | 'gray';
// };

// function DynamicComponent<T extends keyof JSX.IntrinsicElements>(props: IButton<T> & JSX.IntrinsicElements[T]) {
//   const { tag: Tag = 'button' } = props;
//   return <Tag>DynamicComponent</Tag>;
// }

// export default DynamicComponent;
// DZIAAALA
// type NotDynamicType<A> = {
//   tag: any;
// };

// type DynamicType<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// interface IButton {
//   color?: 'purple' | 'gray';
// }
// function DynamicComponent<T extends keyof JSX.IntrinsicElements, A>(props: IButton & (DynamicType<T> | NotDynamicType<A>)) {
//   const { tag: Tag = 'button', children } = props;
//   return <div>{children}</div>;
// }

// export default DynamicComponent;

// DO TĄD

//NOWE

// type NotDynamicType = {
//   tag: any;
// };

// type DynamicType<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// interface IButton<T> {
//   color?: 'purple' | 'gray';
// }
// const DynamicComponent = <T extends keyof JSX.IntrinsicElements>(props: FC<IButton<T> & (DynamicType<T> | NotDynamicType)>) => {
//   const { tag: Tag = 'button', children } = props;
//   return <div>{children}</div>;
// };

// const DynamicComponent: FC<any> = <T>(props) => {
//   const { children = 'button' } = props;
//   return <div>{children}</div>;
// };
// type DynamicType<T extends keyof JSX.IntrinsicElements> = { tag: T } & JSX.IntrinsicElements[T];
// interface IButtonProps extends HTMLAttributes<any> {
//   color?: 'purple' | 'gray';
// }

// const DynamicComponent: FC<IButtonProps> = (props) => {
//   const { children, color = 'purple', ...rest } = props;

//   return (
//     <button style={{ backgroundColor: color }} {...rest}>
//       {children}
//     </button>
//   );
// };

// export default DynamicComponent;

// const DynamicComponent: FC<IButton> = (props) => {
//   const { tag: Tag = 'button', children } = props;
//   return <div>{children}</div>;
// };

// type NotDynamicType<A> = {
//   tag: any;
// };

// type DynamicType<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// interface IButton {
//   color?: 'purple' | 'gray';
// }
// function DynamicComponent<T extends keyof JSX.IntrinsicElements, A>(props: IButton & (DynamicType<T> | NotDynamicType<A>)) {
//   const { tag: Tag = 'button', children } = props;
//   return <div>{children}</div>;
// }

// Przykładowe typy generyczne
// type DynamicTag<T extends keyof JSX.IntrinsicElements> = { tag?: T } & JSX.IntrinsicElements[T];

// interface IButton {
//   color?: 'red' | 'blue';
// }

// const DynamicComponent: FunctionComponent<{ tag: keyof JSX.IntrinsicElements }> = () => {
//   return <div>Test</div>;
// };

// type NotDynamicType<A> = {
//   tag: any;
// };

// type DynamicType<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// // } & JSX.IntrinsicElements[T];

// interface IButton {
//   color?: 'purple' | 'gray';
// }

// function DynamicComponent<T extends keyof JSX.IntrinsicElements, A>(props: IButton & (DynamicType<T> | NotDynamicType<A>)) {
//   const { tag: Tag = 'button', children } = props;
//   return <Tag>{children}</Tag>;
// }

// export default DynamicComponent;

// GIGA TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST
// import React from 'react';

// type Props<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// const DynamicComponent = <T extends keyof JSX.IntrinsicElements>({
//   tag,
//   ...restProps
// }: Props<T>) => {
//   return React.createElement(tag, restProps);
// };

// export default DynamicComponent;

// GIGA TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST KONIEC

// import React from 'react';

// type Props<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

// const DynamicComponent = <T extends keyof JSX.IntrinsicElements>({ tag, ...restProps }: Props<T>) => {
//   return React.createElement(tag, restProps);
// };

// export default DynamicComponent;

// import { type ComponentPropsWithoutRef, type PropsWithChildren, type ElementType } from 'react';

// type DynamicType<T extends ElementType> = PropsWithChildren<
//   { tag?: T } & ComponentPropsWithoutRef<T> & (T extends 'button' ? IButton : never)
// >;

// interface IButton {
//   color?: 'purple' | 'gray';
// }

// function DynamicComponent<T extends ElementType = 'button'>({ tag, children, ...restProps }: DynamicType<T>) {
//   const Component = tag || 'button';
//   return <Component {...restProps}>{children}</Component>;
// }

// export default DynamicComponent;

import React, { type ComponentPropsWithoutRef, type PropsWithChildren, type ElementType } from 'react';

type DynamicType<T extends ElementType> = PropsWithChildren<
  { tag?: T } & ComponentPropsWithoutRef<T> //Every button has `IButton`properties, if you don't want that, remove IButton
>;

interface IButton {
  color?: 'purple' | 'gray';
}

function DynamicComponent<T extends ElementType = 'button'>({ tag, children, ...restProps }: DynamicType<T> & IButton) {
  const Component = tag || 'a';
  return <Component {...restProps}>{children}</Component>;
}

export default DynamicComponent;
