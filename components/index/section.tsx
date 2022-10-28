import { ReactNode } from "react";

type Props = {
  additionalClasses?: string;
  id: string;
  children: ReactNode;
};

export default function Section(props: Props) {
  return (
    <section
      id={props.id}
      className={`container h-screen flex flex-col justify-center pt-32 snap-start${
        props.additionalClasses ? ` ${props.additionalClasses}` : ""
      }`}
    >
      {props.children}
    </section>
  );
}
