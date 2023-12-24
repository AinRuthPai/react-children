import React, { useState } from 'react';

const ChildComponent = () => {
    console.log('자식 컴포넌트 렌더링');
    return <div>Hello World!</div>;
};

const ParentComponent = ({ children }) => {
    console.log('부모 컴포넌트 렌더링');
    const [toggle, setToggle] = useState(false);
    return (
        <>
            {children}
            <button onClick={() => setToggle(!toggle)}>re-render</button>
        </>
    );
};

export default function App() {
    return (
        <div>
            <ParentComponent>
                <ChildComponent />
            </ParentComponent>
        </div>
    );
}
