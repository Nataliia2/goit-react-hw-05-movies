import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, Button } from './SearchBarStyle';

export default function SearchBar({ onSubmit }) {
    const [searchName, setSearchName] = useState('');
   
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchName(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchName.trim() === '') {
            alert("Enter your request, please!");
        }
        onSubmit(searchName);
         setSearchName('');
    }
    
    return (
        <header>
            <Form onSubmit={handleSubmit}>                
                <Input
                onChange={handleChange}
                name="searchName"
                value={searchName}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
                <Button type="submit" className="button">
                    <span>Search</span>
                </Button>
            </Form>
        </header>)
}
    
SearchBar.propTypes = {
    onSubmit:  PropTypes.func.isRequired,
}