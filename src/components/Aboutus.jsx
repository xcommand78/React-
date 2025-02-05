import React from 'react';

const Aboutus = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="mb-3 w-50"> {/* Container with limited width, w-50 for 50% of the screen width */}
                <article>
                    <h2 className="text-center mb-4">About TextEd & WordCounter</h2>
                    <p>
                        <strong>TextEd</strong> is an interactive text editing application that allows users to input, modify, and manipulate text content. It offers a variety of features including:
                    </p>
                    <ul>
                        <li>Word count tracker that updates as the user types.</li>
                        <li>Real-time text length calculator, including spaces.</li>
                        <li>Options to convert text to uppercase and lowercase.</li>
                        <li>Ability to clear all text with a single button click.</li>
                        <li>Custom text styling options such as changing text color.</li>
                    </ul>
                    <p>
                        The <strong>WordCounter</strong> feature keeps track of the total number of words and characters in the text box, allowing users to monitor their writing progress. Whether you're writing a short note or a long article, TextEd provides a quick and easy way to track your word count.
                    </p>
                    <h4 className="mt-4">Key Features</h4>
                    <ul>
                        <li>Simple and intuitive user interface.</li>
                        <li>Dark and light mode toggle for personalized experience.</li>
                        <li>Supports text formatting, including converting case and changing text color.</li>
                    </ul>
                    <p className="mt-4">
                        TextEd is perfect for writers, students, or anyone who needs to keep track of their word count and organize their thoughts efficiently. It offers a streamlined and distraction-free environment to focus on your writing, with powerful text editing features at your fingertips.
                    </p>
                    <h5 className="mt-3">Try TextEd Today!</h5>
                    <p>Start using TextEd and experience a modern, feature-rich word processor built with ease of use in mind. Whether you're drafting a blog post, writing an essay, or just typing for fun, TextEd is here to help!</p>
                </article>
            </div>
        </div>
    );
}

export default Aboutus;
