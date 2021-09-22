import { Logo } from './Logo'
import { Controls } from './Controls'
import { NextBlock } from './NextBlock'

export const ControlPanel = () => {
  return (
    <section className="bg-blue-800 flex justify-center items-center py-40 w-full">
      <Logo />

      <Controls />

      <NextBlock />
    </section>
  )
}
