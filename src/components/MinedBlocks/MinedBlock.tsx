import Block from '@/classes/Block'
import Time from '@/utils/Time'

import { Divider } from '@/components/misc/Divider'

interface MinedBlockProps {
  block: Block
}

export const MinedBlock = ({ block }: MinedBlockProps) => (
  <div className="overflow-ellipsis bg-white p-5 shadow-lg rounded-lg break-all">
    <h3 className="text-center text-2xl mb-5 font-medium">
      Block #{block.index}
    </h3>

    <div className="grid gap-1">
      <div>Data Hash: {block.header.dataHash}</div>
      <div>Difficulty: {block.header.difficulty}</div>
      <div>Nonce: {block.header.nonce}</div>
      <div>Previous Hash: {block.header.previousHash}</div>
      <div>Timestamp: {block.header.timestamp}</div>

      <Divider />

      <div>Data: {block.data}</div>
      <div>Hash: {block.hash}</div>
      <div>Created at: {Time.unixToHuman(block.header.timestamp)}</div>
    </div>
  </div>
)
