import { Logo } from './Logo'
import { Controls } from './Controls'
import { NextBlock } from './NextBlock'
import { Usage } from './Usage'

export const ControlPanel = () => {
  return (
    <section className="bg-blue-800 flex flex-col justify-center items-center py-40 w-full">
      <div className="flex justify-center items-center">
        <Logo />

        <Controls />

        <NextBlock />
      </div>

      <Usage />
    </section>
  )
}
