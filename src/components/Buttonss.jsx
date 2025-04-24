import React from 'react'
import Reset from './Reset'
import Button2 from './Button2'
import Button from './Button'

const Buttonss = ({ count, setCount, setColor }) => {
  function handleIncrement() {
    setCount(prev=>prev+1)
    setColor('text-green-500')
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(prev=>prev-1)
      setColor('text-red-500')
    }
  }

  function handleReset() {
    setCount(0)
    setColor('text-gray-500')
  }

  return (
    <main>
      <section className='flex gap-4 justify-center mt-10'>
        <Button handleClick={handleIncrement} />
        <Button2 handleClick2={handleDecrement} />
        <Reset reset={handleReset} />
      </section>
    </main>
  )
}

export default Buttonss
