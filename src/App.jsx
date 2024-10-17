import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
      {/*##### equivalente ao body*/}

        <div className='h-20 top-0 w-full shadow-md bg-sky-600 flex fixed'>
        {/*##### menu do topo*/}

          <div className='content-center pl-16'>
          {/*##### foto de perfil*/}
            <img className='h-16 rounded-xl' src="src\assets\pfp.png" alt=""/>
          </div>

          <div className='content-center pl-2'>
          {/*##### nome e cargo*/}
            <h1 className='text-white font-bold'>Gustavo Magalhães</h1>
            <h1 className='text-slate-200'>Estudante de Ciência da Computação</h1>
          </div>

        </div>

        <div className='h-screen w-96 bg-sky-300 mr-auto ml-8 flex flex-col items-center'>
        {/*##### menu lateral e cards*/}

          <div className='h-16 w-10/12 border-b-4 border-sky-600 rounded shadow-lg bg-white mt-32 flex items-center justify-center'>
            <h1 class='text-center'>Card 1</h1>
          </div>

          <div className='h-16 w-10/12 border-b-4 border-sky-600 rounded shadow-lg bg-white mt-4 flex items-center justify-center'>
            <h1 class='text-center'>Card 2</h1>
          </div>

          <div className='h-16 w-10/12 border-b-4 border-sky-600 rounded shadow-lg bg-white mt-4 flex items-center justify-center'>
            <h1 class='text-center'>Card 3</h1>
          </div>

          <div className='h-16 w-10/12 border-b-4 border-sky-600 rounded shadow-lg bg-white mt-4 flex items-center justify-center'>
            <h1 class='text-center'>Card 4</h1>
          </div>

          <div className='h-16 w-10/12 border-b-4 border-sky-600 rounded shadow-lg bg-white mt-4 flex items-center justify-center'>
            <h1 class='text-center'>Card 5</h1>
          </div>

        </div>

        <div className='flex justify-start w-3/4 ml-2 p-8'>
          <div className='w-11/12 -ml-24 mt-10 h-[64em] bg-sky-200 rounded-lg shadow-lg p-8'>
            <h1 className='text-2xl font-bold mb-4'>Placeholder</h1>
            <p className='text-lg'>Lorem ipsum dolor sit 
            amet consectetur adipisicing elit.
            Voluptate accusantium architecto reprehen
            derit fugit, ea laudantium eius neque sed
            illum eos possimus error! Obcaecati debitis
             quam laboriosam ab mollitia sed eum!</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
