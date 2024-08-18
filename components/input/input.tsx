"use client";

import styles from "@/components/input/input.module.css";
import propType from "prop-types";

export function InputForm({
  type,
  label,
  placeholder,
}: {
  type: string;
  label: string;
  placeholder: string;
}) {
  return (
    <>
      <form className="flex flex-col gap-1" action="#">
        <label className={styles.label} htmlFor={label.toLowerCase()}>
          {label}
        </label>
        <input
          className={styles.simpleForm}
          type={type}
          placeholder={placeholder}
          name={label.toLowerCase()}
        />
      </form>
    </>
  );
}

export function RememberMe() {
  return (
    <div className="flex gap-2">
      <input type="checkbox" name="rememberMe" />
      <label className={styles.label} htmlFor="rememberMe">Remember me</label>
    </div>
  );
}

// PropType Checking
// PropType Default
