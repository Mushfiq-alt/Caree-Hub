import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center py-4 mb-2'>Blog</h3>
            <hr />
            <div className='p-5 grid grid-cols-1 md:grid-cols-1 gap-4 lg:px-16'>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is ContextApi ?</h3>
                    <p>Context API is a feature in React that allows components to share data without the needs to pass data down through each level of the component tree. In React, components are often organized into a hierarchy, with parent components passing data down to child components via props.</p>
                </div>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is custom hook in react.js?</h3>
                    <p>In React.js, a custom hook is a function that allows to reuse logic between different components. It is a way to extract common functionality into a separate function, so that it can be shared across multiple components.</p>
                </div>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is useRef? When We need it?</h3>
                    <p>In React, useRef is a hook that returns a mutable object with a current property that can be used to store a value. The value of the ref persists between renders and can be updated without triggering a re-render of the component.

                        The useRef hook is often used when you need to store a reference to a DOM element or to persist data between renders. Some common use cases for useRef include:

                        Accessing DOM elements: We can use useRef to create a reference to a DOM element and then access or modify its properties directly. For example, we might use useRef to create a reference to an input field and then focus the input when the component mounts.

                        Persisting data between renders: We can also use useRef to persist data between renders without triggering a re-render of the component. For example, you might use useRef to store a count value that is updated in response to user interactions.

                        Caching expensive calculations: If we have an expensive calculation that is used frequently in your component, you can use useRef to cache the result so that it doesn't need to be recalculated on each render.</p>
                </div>
                <div className='border-2 p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is useMemo? When We need it?</h3>
                    <p>In React, useMemo is a hook that memoizes the result of a function call and returns the cached result on subsequent renders unless its dependencies have changed. This can be used to improve performance by avoiding unnecessary re-computations of expensive or complex computations.

                        The useMemo hook takes two arguments: a function that returns a value, and an array of dependencies. The function is only re-executed if one of the dependencies changes. If none of the dependencies change, the cached result of the function is returned.

                        You can use useMemo when you have a function that performs a heavy computation, and you want to avoid running it unnecessarily on every render. This is particularly useful when dealing with large data sets or complex computations that could cause your application to slow down.</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
