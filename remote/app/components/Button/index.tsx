import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <button {...props}>This is remote button {props.children}</button>;
};

export default Button;
