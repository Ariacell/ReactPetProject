import React, { useState, Children } from 'react';
import AccordionSection, { IAccordionSectionProps } from './AccordionSectionDONEWRONG';

export interface IAccordionProps {
    children: Array<React.ReactElement<IAccordionSectionProps>>
}

export interface IOpenSections {
    label: string, isOpen: boolean
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
    var initOpenSections: IOpenSections[] = [];
    const fillOpenSections = (sections: IOpenSections[]) => {
        props.children.map(child => {
            const propLabel = child.props.label;
            const open = false;
            const section: IOpenSections = { label: propLabel, isOpen: open };
            sections.push(section);
        });
        return sections;
    };




    const [openSections, setOpenSections] = useState<IOpenSections[]>(fillOpenSections(initOpenSections));

    const onClick = (label: string) => {
        //props.children.filter(section => section.props.label == label)[0].props.isOpen = true;
        setOpenSections(openSections.map(section => section.label == label ? 
            {label: section.label, isOpen: !section.isOpen} 
            : {label: section.label, isOpen: section.isOpen} ))
        }
    if (props.children) {
        return (
            <>
                {props.children.map(child => (
                    <AccordionSection
                        isOpen={!!((openSections.filter(section => section.label == child.props.label))[0].isOpen)}
                        label={child.props.label}
                        onClick={onClick}>
                        {child.props.children}
                    </AccordionSection>
                ))}
            </>
        )
    }
    else return (<>Not children passed to this accordion!</>)
}
export default Accordion;