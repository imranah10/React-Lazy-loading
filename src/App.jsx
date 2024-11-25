
import './App.css'
import React, { Suspense } from 'react'
// import LazyData from './LazyData'
function App() {
const LazyData=React.lazy(()=>import('./LazyData'))

  return (
    <>
    <h1>Lazy Loading data</h1>
    <Suspense fallback='please wait data is Loading....'>
    <LazyData />
    </Suspense>
   
    </>
  )
}

export default App
