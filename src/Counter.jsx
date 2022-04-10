import React, { useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";

import { reducer } from "./counterReducer";
import { types } from "./types";
import { useForm } from "./useForm";

const initialState = {
    count: 0,
    number: 1,
};

export const Counter = () => {
    const [button] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { handleInputChange, reset, values } = useForm({ number: "" });
    const { number } = values;

    const handleIncrement = () => dispatch({ type: types.increment, payload: state.number });
    const handleDecrement = () => dispatch({ type: types.decrement, payload: state.number });
    const handleChangeNumber = (e) => {
        e.preventDefault();
        if (number === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a number before clicking the button",
                footer: "",
            });
        } else {
            dispatch({ type: types.changeNumber, payload: parseInt(number) });
            reset();
        }
    };
    const handleReset = () => dispatch({ type: types.resetCounter });

    return (
        <div>
            <h1 className='text-center m-5 text-primary'>Counter with hook UseReducer</h1>
            <hr className='border border-primary' />
            <h2 className='m-5 text-success'>Number: {state.number}</h2>
            <h2 className='text-center'>{state.count}</h2>
            <div className='d-flex justify-content-center'>
                <button onClick={handleIncrement} className='m-3 btn btn-primary'>
                    +{state.number}
                </button>
                <button onClick={handleDecrement} className='m-3 btn btn-warning'>
                    -{state.number}
                </button>
                <button onClick={handleReset} className=' m-3 p-2 btn btn-danger'>
                    reset
                </button>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <input
                    type='number'
                    className='form-control w-25 mx-3'
                    placeholder='change the number of decrement increment'
                    onChange={handleInputChange}
                    name='number'
                    value={number}
                ></input>
                <button className='btn btn-success' onClick={handleChangeNumber} disabled={button}>
                    change
                </button>
            </div>
        </div>
    );
};
