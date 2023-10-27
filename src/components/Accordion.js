import React from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

const Accordion = ({ items, index }) => {
    const [expandedIndex, setExpandedIndex] = React.useState(null);

    const handleClick = (nextIndex) => {

        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return null;
            }

            return nextIndex;
        })
    };

    const renderedItems = items.map((item, i) => {
        const isExpanded = i === expandedIndex;

        const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;

        return (
            <div key={item.id}>

                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(i)}>
                    {item.label}
                    {icon}
                </div>
                {
                    isExpanded && <div className='border-b p-5'>{item.content}</div>
                }
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>
};

export default Accordion;
