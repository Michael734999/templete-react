import React from 'react';
import Footers from './components/footer/footers';
import Header from './components/header/Header';

function App() {
    return (
        <div>
            <Header />
            <div className="text-center">
                <div className="flex min-h-screen justify-center items-center">
                    <h1 className="">Template</h1>
                </div>
            </div>
            <Footers />
        </div>
    );
}

export default App;
