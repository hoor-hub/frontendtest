import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Select, Button } from 'antd';
import { setSearchKeyword, setFilterOptions } from '../../redux/actions/allActions';

const { Option } = Select;

const SearchAndFilterComponent = () => {
    const dispatch = useDispatch();

    const handleSearch = (value) => {
        dispatch(setSearchKeyword(value)); // Dispatch setSearchKeyword action with the search keyword
    };

    const handleFilterChange = (type, value) => {
        dispatch(setFilterOptions({ [type]: value }));
    };

    return (
        <div>
            <Input.Search
                placeholder="Search articles"
                onSearch={handleSearch} // Call handleSearch when user presses Enter or clicks the search icon
                style={{ width: 200 }}
            />
            <Select
                placeholder="Date"
                onChange={(value) => handleFilterChange('date', value)}
                style={{ width: 120, margin: '0 8px' }}
            >
                <Option value="Today">Today</Option>
                <Option value="This Week">This Week</Option>
                <Option value="This Month">This Month</Option>
            </Select>
            <Select
                placeholder="Category"
                onChange={(value) => handleFilterChange('category', value)}
                style={{ width: 120, margin: '0 8px' }}
            >
                <Option value="Technology">Technology</Option>
                <Option value="Science">Science</Option>
                <Option value="Business">Business</Option>
            </Select>
            <Select
                placeholder="Source"
                onChange={(value) => handleFilterChange('source', value)}
                style={{ width: 120, margin: '0 8px' }}
            >
                <Option value="CNN">CNN</Option>
                <Option value="BBC">BBC</Option>
                <Option value="NY Times">NY Times</Option>
            </Select>
            <Button onClick={() => handleFilterChange('', '')}>Clear Filters</Button>
        </div>
    );
};

export default SearchAndFilterComponent;
