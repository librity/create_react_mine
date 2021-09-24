// SOURCE: https://mining-simulator.netlify.app/

import React, { useState } from 'react'
import CryptoJS from 'crypto-js'
import { useForm } from 'react-hook-form'

interface Block {
  height: number
  previousHash: string
  hash: string
  data: string
  createdAt: number
  nonce: number
}

interface IForm {
  data: string
  nonce?: string
  target?: string
}

function App() {
  const [blocks, setBlocks] = useState<Block[]>([])
  const [interval, setTheInterval] = useState<NodeJS.Timeout>()
  const { register, handleSubmit, setValue, watch, getValues } = useForm<IForm>(
    {
      defaultValues: {
        target: '2',
      },
    },
  )
  const onSubmit = ({ data, nonce }: IForm) => {
    const previousHash = blocks.length === 0 ? '' : blocks[0].hash
    const now = Date.now()
    const newBlock: Block = {
      height: blocks.length,
      data: data,
      previousHash,
      hash: CryptoJS.SHA256(
        CryptoJS.SHA256(`${nonce}${data}${previousHash}`),
      ).toString(),
      createdAt: now,
      nonce: parseInt(getValues('nonce') || '0') ?? 0,
    }
    setBlocks((blocks) => [newBlock, ...blocks])
    setValue('data', '')
    setValue('nonce', '')
  }
  const candidateHash = CryptoJS.SHA256(
    CryptoJS.SHA256(
      `${watch('nonce')}${watch('data')}${
        blocks.length === 0 ? '' : blocks[0].hash
      }`,
    ),
  ).toString()
  const neededZeros = '0'.repeat(parseInt(watch('target') || '0'))
  const canMine = candidateHash.startsWith(neededZeros)
  const findNonce = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const interval = setInterval(() => {
      const newNonce = parseInt(getValues('nonce') || '0') + 1
      setValue('nonce', newNonce.toString())
    }, 10)
    setTheInterval(interval)
  }
  if (canMine && interval) {
    clearInterval(interval)
  }

  return (
    <div className="">
      <div className="bg-gray-800 flex justify-center items-center py-40 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
          <h3 className="text-white flex flex-col text-4xl text-center mb-10">
            니꼬 코인
            <small className="underline text-xs">
              <a
                href="https://nomadcoders.co/"
                target="_blank"
                rel="noreferrer"
              >
                Learn to code with 니꼬 💖
              </a>
            </small>
          </h3>
          <input
            type="text"
            ref={register({ required: true })}
            name="data"
            placeholder="Block의 Data"
            className="w-full px-5  text-lg py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white rounded-md"
          />
          <div className="flex mt-2">
            <input
              type="number"
              ref={register}
              name="nonce"
              min={0}
              placeholder="Nonce"
              className="w-full px-5 mr-2 text-lg py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white rounded-md"
            />
            <button
              onClick={findNonce}
              className="text-white px-5 rounded-md block bg-purple-500"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex mt-2">
            <input
              ref={register}
              type="number"
              min={0}
              name="target"
              className="mr-2 text-center rounded-md text-xl"
              style={{ width: 65 }}
            />
            <input
              type="submit"
              value="Mine Block"
              name="data"
              disabled={!canMine}
              className={`w-full cursor-pointer  flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 ${
                canMine
                  ? 'hover:bg-indigo-600'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            />
          </div>
        </form>
        <div className="bg-yellow-50 ml-20  text-l p-5 shadow-lg max-w-screen-sm w-full rounded-lg">
          <h3 className="text-center text-2xl mb-8 font-medium ">
            Candidate Block
          </h3>
          <div className="">
            <h5 className="mb-5">
              <span className="opacity-60">Previous Hash:</span>{' '}
              <span className="bg-green-500 block text-center shadow-md text-white p-1 rounded-md overflow-ellipsis">
                {blocks.length === 0 ? 'None' : blocks[0].hash}
              </span>
            </h5>
            <h5 className="mb-5">
              <span className="opacity-60 block">Data:</span>{' '}
              <span className="bg-gray-500 text-white p-1 rounded-md overflow-ellipsis shadow-md">
                {watch('data')}
              </span>
            </h5>
            <h5 className="w-full">
              <span className="opacity-60">Hash:</span>{' '}
              <span className="bg-blue-400  block min-w-full w-full text-white p-1 rounded-md  shadow-md">
                {candidateHash}
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col bg-gray-300 min-h-screen">
        <h3 className="text-xl uppercase bg-white -mt-8 inline shadow-lg font-medium py-3 px-10 rounded-md">
          Blocks
        </h3>
        <div className="grid grid-cols-3 w-full mt-20 gap-20 px-20 ">
          {blocks.map((block) => (
            <div
              key={block.createdAt}
              className="overflow-ellipsis bg-white p-5 shadow-lg rounded-lg"
            >
              <h3 className="text-center text-2xl mb-5 font-medium">
                Block #{block.height}
              </h3>
              <div className="grid gap-2">
                <h5 className="overflow-hidden">
                  <span className="opacity-60 block">Previous Hash:</span>{' '}
                  <span className="bg-green-500  block text-white p-1 rounded-md">
                    {block.previousHash || 'None'}
                  </span>
                </h5>

                <span className="font-medium">+</span>
                <h5>
                  <span className="opacity-60 block">Nonce:</span>{' '}
                  <span className="bg-gray-500 text-white p-1 rounded-md overflow-ellipsis">
                    {block.nonce}
                  </span>
                </h5>
                <span className="font-medium">+</span>
                <h5>
                  <span className="opacity-60 block">Data:</span>
                  <span className="bg-gray-500 text-white p-1 rounded-md overflow-ellipsis">
                    {block.data}
                  </span>
                </h5>
                <span className="font-medium">=</span>
                <h5 className="overflow-hidden">
                  <span className="opacity-60">Hash:</span>{' '}
                  <span className="bg-blue-400 block text-white p-1 rounded-md ">
                    {block.hash}
                  </span>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
