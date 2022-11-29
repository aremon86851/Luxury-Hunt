import React from 'react';

const Blog = () => {
    return (
        <div className='my-10 mx-2 md:mx-5 lg:mx-20'>
            <div>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>What are the different ways to manage a state in a React application? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.useState is the first tool you should reach for to manage state in your components.
                    It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</span>
                </h3>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>How does prototypical inheritance work? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</span>
                </h3>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>What is a unit test? Why should we write unit tests? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</span>

                </h3>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>React vs. Angular vs. Vue? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span className='underline'>Angula vs React: </span><span>
                    If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.</span>
                    <span className='underline'>React vs Vue: </span><span>
                        The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.</span>
                    <span className='underline'>Angular vs Vue: </span><span>

                        In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.</span>
                </h3>
            </div>
        </div>
    );
};

export default Blog;