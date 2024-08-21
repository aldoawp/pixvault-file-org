import styles from "@/components/button/button.module.css";
import { ReactElement } from "react";
import clsx from 'clsx';

type ButtonProps = {
  type: "submit" | "button" | "reset";
  style: "primary" | "ghost";
  text?: string;
  icon?: ReactElement;
};

export default function Button({
  type,
  style,
  text,
  icon,
}: ButtonProps) {
  return (
    <button type={type} className={
      clsx(
        {
          [styles.primary]: style === 'primary',
          [styles.ghost]: style === 'ghost',
        }
      )
    }>
      {icon}
      <p>{text}</p>
    </button>
  );
}

// Add icon and color
