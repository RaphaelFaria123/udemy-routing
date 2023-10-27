import React from 'react';
import Table from './Table';
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';
import useSort from '../hooks/useSort';

function SortableTable(props) {
    const { config, data } = props;
    const { sortBy, sortOrder, sort, sortedData } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        if (column.sortValue) {
            return {
                ...column,
                header: () => {
                    return <th className="cursor-pointer hover:bg-gray-100" onClick={() => sort(column.label)}>
                        <div className="flex items-center">
                            {getIcons(column.label, sortBy, sortOrder)} {column.label}
                        </div>
                    </th>
                }
            }
        }
    });

    return <div>
        <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
}

const getIcons = (label, sortBy, sortOrder) => {
    console.log(label, sortBy, sortOrder);

    if (label !== sortBy) {
        return <div>
            <RiArrowDropUpFill />
            <RiArrowDropDownFill />
        </div>;
    } else if (sortOrder === 'asc') {
        return <div>
            <RiArrowDropUpFill />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <RiArrowDropDownFill />
        </div>
    }
}

export default SortableTable;