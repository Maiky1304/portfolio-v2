import Header from "../index/header";
import React from "react";

type Props = {
    children: React.ReactNode;
}

export function DefaultLayout(props: Props) {
    return (
        <div className="snap snap-y snap-mandatory h-screen overflow-y-scroll">
            <Header />

            {props.children}
        </div>
    )
}