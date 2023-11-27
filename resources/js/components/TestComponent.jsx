import React from 'react';
import ReactDom from 'react-dom/client';

export default function TestComponent(){
    return (
        <section>
            <a href="https://reactjs.org">
                React - A JavaScript Library for Building User Interfaces
            </a>
        </section>

    );

}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<TestComponent />);