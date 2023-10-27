import React from 'react';
import Panel from './Panel';
import { GoChevronDown } from 'react-icons/go';

const Dropdown = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const divEl = React.useRef(null);

    React.useEffect(() => {
        const handleWindowClick = (event) => {
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleWindowClick, true);

        return () => {
            window.removeEventListener('click', handleWindowClick, true);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        setIsOpen(false);
        onChange(value);
    };

    const optionsContent = options.map((option) => {
        const isSelected = option.value === value?.value;

        return (
            <div key={option.value} className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleOptionClick(option)}>
                {isSelected ? <span className="text-blue-500">{option.label}</span> :
                    option.label}
            </div>
        );
    });

    return <>
        <div className="w-48 relative" ref={divEl}>
            <Panel onClick={handleClick} className="flex justify-between items-center cursor-pointer">
                {value?.label || "Select..."}
                <GoChevronDown className='text-lg' />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {optionsContent}
                </Panel>
            )}
        </div>
    </>
};

export default Dropdown;
