import Dropdown from '../components/Dropdown';
import React from 'react';

function DropdownPage() {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleSelectedOption = (selectedOption) => {
      setSelectedOption(selectedOption);
    };
  
    const options = [
      {
        label: 'The color red',
        value: 'red'
      },
      {
        label: 'The color green',
        value: 'green'
      },
      {
        label: 'A shade of blue',
        value: 'blue'
      }
    ];
  
    return <div><Dropdown options={options} onChange={handleSelectedOption} value={selectedOption} /></div>
}

export default DropdownPage;
