import React, { useState, useMemo, useCallback, ChangeEvent } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import GlobalStyle from './styles';
import RenderRouter from './routes';

function App() {
    return (
        <>
            <GlobalStyle />
            <RenderRouter />
        </>
    );
}

export default App;
