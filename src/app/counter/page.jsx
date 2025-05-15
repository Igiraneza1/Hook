'use client'
import { useState } from 'react';
import useDocumentTitle from '../hook/page';

function Counter() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Count: ${count}`);

  return (
    <div className='bg-blue-500 p-10 rounded-b-3xl w-84'>
      <h1 className="text-2xl font-bold text-gray-300 mb-5">Custom hook</h1>
      <h2 className='text-2xl font-bold text-center'>Counter: {count}</h2>
      <div className='flex flex-col pt-5'>
      <button className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg m-2 w-full' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg m-2 w-full' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg m-2 w-full' onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;