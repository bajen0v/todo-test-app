import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoField } from './TodoField';

test("TodoField добавляет таску", () => {
    const handleClickAdd = jest.fn();

    render(<TodoField onAddTask={handleClickAdd}/>)

    const button = screen.getByText(/Add Task/i);
    const input = screen.getByLabelText(/New Task/i);

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(handleClickAdd).toBeCalledTimes(1);
})

test("TodoField не добавляет таску, с пустым инпутом", () => {
    const handleClickAdd = jest.fn();

    render(<TodoField onAddTask={handleClickAdd}/>)

    const button = screen.getByText(/Add Task/i);

    fireEvent.click(button);
    expect(button).toBeInTheDocument();

    expect(handleClickAdd).toBeCalledTimes(0);
})


