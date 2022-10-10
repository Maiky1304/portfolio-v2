import React, {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";

type Context = [boolean, Dispatch<SetStateAction<boolean>>];

const NavigationMenuContext = createContext<Context>([false, () => {}]);

export function useNavigationMenu() {
    return useContext(NavigationMenuContext);
}

type Props = {
    children: React.ReactNode;
    defaultValue: boolean;
}

export function NavigationMenuProvider(props: Props) {
    const [state, setState] = useState(props.defaultValue);

    useEffect(() => {
        console.log("Component detected value change to " + state)
    }, [state]);

    return (
        <NavigationMenuContext.Provider value={[state, setState]}>
            {props.children}
        </NavigationMenuContext.Provider>
    )
}