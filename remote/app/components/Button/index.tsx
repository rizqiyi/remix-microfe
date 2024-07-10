import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: "red",
        color: "black",
        fontWeight: "bold",
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
      }}
      {...props}
    >
      This is remote button {props.children}
    </button>
  );
};

export default Button;
