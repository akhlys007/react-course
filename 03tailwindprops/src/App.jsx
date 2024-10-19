
import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App(props) {
  console.log (props);

  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3rounded-md' html>Vite with Tailwind CSS</h1>
    <Card username="hitesh"/>
    <Card />
    <Card />

    </>
  )
}

export default App
