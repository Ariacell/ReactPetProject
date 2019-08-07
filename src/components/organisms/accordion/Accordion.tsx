import eact, { useState } from 'react';

export interface IAccordionProps {
    children: React.ReactNode
}

export const Accordion: React.FunctionComponent<IAccordionProps> = (props) => {
// export const Accordion: React.FunctionComponent<IAccordionProps> = ({children}) => {
    // return (
    //     <div>
    //         {children.map...}
    //         ^ This gives error children may be undefined, 
    //              but the below implementation does not?
    //     </div>
// }
    const [openSections, setOpenSections] = useState();

    return (
        <div>
            {props.children}

        </div>
    )
}
export default Accordion;