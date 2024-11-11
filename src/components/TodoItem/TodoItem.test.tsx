import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoItem } from './TodoItem';

test("TodoField добавляет таску", () => {
    const handleClickRemove = jest.fn();
    const handleClickToggle = jest.fn();

    render(<TodoItem task={'new task'} completed={false} onToggle={handleClickToggle} onDelete={handleClickRemove}/>)

    const button = screen.getByRole('button');
    const element = screen.getByText('new task');

    const checkbox = screen.getByRole('checkbox');
    expect(button).toBeInTheDocument();
    expect(element).toBeInTheDocument();

    fireEvent.click(checkbox);
    fireEvent.click(button);

    expect(handleClickToggle).toBeCalledTimes(1);
    expect(handleClickRemove).toBeCalledTimes(1);
})



