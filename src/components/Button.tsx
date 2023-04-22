import React from "react";
import type { FC } from "react";
import { button } from "./styles.css";

type Props = {
  text: string;
  color: "red" | "blue";
};

export const Button: FC<Props> = ({ text, color }) => {
  return (
    <button
      className={button}
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};
