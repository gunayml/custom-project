import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type CommonProps = {
  children: ReactNode;
  textOnly?: boolean;
};

// Ayırmak yerine tek tip içinde optional `to` ile işler daha sade olur
type ButtonOrLinkProps =
  | (CommonProps & ComponentPropsWithoutRef<"button"> & { to?: undefined })
  | (CommonProps & LinkProps & { to: string });

export default function Button(props: ButtonOrLinkProps) {
  const { textOnly, to } = props;
  const className = `button ${textOnly ? "button--text-only" : ""}`;

  if (to) {
    // Only pass LinkProps to <Link>
    const { children, textOnly, to, ...linkProps } = props as CommonProps &
      LinkProps & { to: string };
    return (
      <Link className={className} to={to} {...linkProps}>
        {children}
      </Link>
    );
  }

  // Only pass button props to <button>
  const {
    children: btnChildren,
    textOnly: btnTextOnly,
    to: btnTo,
    ...buttonProps
  } = props as CommonProps &
    ComponentPropsWithoutRef<"button"> & { to?: undefined };
  return (
    <button className={className} {...buttonProps}>
      {btnChildren}
    </button>
  );
}
