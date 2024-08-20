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
      <label className={styles.label} htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input
        className={styles.simpleForm}
        type={type}
        placeholder={placeholder}
        name={label.toLowerCase()}
      />
    </>
  );
}

export function RememberMe() {
  return (
    <div className="flex gap-2">
      <input type="checkbox" name="rememberMe" id="rememberMe"/>
      <label className={styles.label} htmlFor="rememberMe">
        Remember me
      </label>
    </div>
  );
}

// PropType Checking
// PropType Default
