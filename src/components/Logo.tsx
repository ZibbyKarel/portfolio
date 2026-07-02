import { FC } from "react";
interface LogoProps {}

export const Logo: FC<LogoProps> = (props) => {
  return (
    <>
      <span className="text-accent">{"<"}</span>kz
      <span className="text-accent">{"/>"}</span>
    </>
  );
};
