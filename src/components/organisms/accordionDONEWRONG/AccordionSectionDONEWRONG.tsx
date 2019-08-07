import React, {FunctionComponent} from 'react';

export interface IAccordionSectionProps {
    isOpen: boolean,
    label: string,
    onClick: (s: string) => void,
    children: React.ReactNode
}

export const AccordionSection: React.FunctionComponent<IAccordionSectionProps> = (props) => {

    const onLabelClick = () =>{
        props.onClick(props.label);
    }

    return (
        <div>
            <div className='accordion-section-label' onClick={onLabelClick} style={{cursor: 'pointer'}}>
                {props.label}
            </div>
            {props.isOpen && (
                <div className='open-accordion-section-child'>
                    {props.children}
                </div>
            )}
        </div>
    )
}
export default AccordionSection;

