import {ReactNode} from "react";

type Props = {
    additionalClasses?: string;
    id: string;
    children: ReactNode
}

export default function Section(props: Props) {
    return (
        <section id={props.id} className={`h-screen container pt-40 snap-start${props.additionalClasses ? ` ${props.additionalClasses}` : ""}`}>
            {props.children}
        </section>
    )
}