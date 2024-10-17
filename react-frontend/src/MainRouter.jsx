import React, {Fragment, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const MainRouter = () => {

    const [count, setCount] = useState(0)


    return ( 
            <Fragment>

                {/* <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route path="/Education" element={<Education />}></Route>
                    <Route path="/Skills" element={<Skills />}></Route>
                    <Route path="/Projects" element={<Projects />}></Route>
                    <Route path="/Publications" element={<Publications />}></Route>
                    <Route path="/Miscellaneous" element={<Miscellaneous />}></Route>

                </Routes>
                <Footer /> */}


                <>
                    <div>
                        <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </div>
                    <h1>Vite + React</h1>
                    <div className="card">
                        <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                        </button>
                        <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                </>
            </ Fragment>        
    )
};

export default MainRouter;