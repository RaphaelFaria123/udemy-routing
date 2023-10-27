import React from 'react';

function useSort(data, config) {
    const [sortOrder, setSortOrder] = React.useState(null);
    const [sortBy, setSortBy] = React.useState(null);

    const sort = (label) => {
        if (label === sortBy) {
            if (sortOrder === null) {
                setSortBy(label);
                setSortOrder('asc');
            } else if (sortOrder === 'asc') {
                setSortOrder('desc');
                setSortBy(label);
            } else if (sortOrder === 'desc') {
                setSortOrder(null);
                setSortBy(null);
            }
        } else {
            setSortBy(label);
            setSortOrder('asc');
        }
    }

    //only sort data if sortOrder && sortBy are not null
    //make a copy of the data prop
    //figure out what the sort value is
    //sort the data

    let sortedData = [...data];
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData.sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'desc' ? -1 : 1;

            if (typeof valueA === 'string') {
                return reverseOrder * valueA.localeCompare(valueB);
            } else {
                return reverseOrder * (valueA - valueB);
            }
        });
    }

    return { sortBy, sortOrder, sort, sortedData };
}

export default useSort;