import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='text'
                placeholder='First name'
                {...register('First name', { required: true, maxLength: 80 })}
            />
            <input
                type='text'
                placeholder='Last name'
                {...register('Last name', { required: true, maxLength: 100 })}
            />
            <input
                type='text'
                placeholder='Email'
                {...register('Email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                })}
            />
            <input
                type='tel'
                placeholder='Mobile number'
                {...register('Mobile number', {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                })}
            />

            <input
                {...register('Gender', { required: true })}
                type='radio'
                value='M'
            />
            <input
                {...register('Gender', { required: true })}
                type='radio'
                value=' F'
            />
            <input
                {...register('Gender', { required: true })}
                type='radio'
                value=' L'
            />
            <input
                {...register('Gender', { required: true })}
                type='radio'
                value=' G'
            />
            <input
                {...register('Gender', { required: true })}
                type='radio'
                value=' B'
            />
            <input
                {...register('Gender', { required: true })}
                type='radio'
                value=' T'
            />
            <input
                type='url'
                placeholder='Profile Link'
                {...register('Profile Link', {})}
            />
            <textarea {...register('Message', {})} />

            <input type='submit' />
        </form>
    );
}
