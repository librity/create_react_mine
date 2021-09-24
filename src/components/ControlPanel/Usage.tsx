export const Usage = () => {
  return (
    <details className="self-start flex-col justify-center items-center text-white mt-10 mx-20 text-lg">
      <summary className="mb-5 text-green-50">Usage</summary>

      <div className="overflow-ellipsis bg-green-600 p-5 shadow-lg rounded-lg">
        <p>
          A Blockchain is a write-only database that guarantees its integrity
          with{' '}
          <a
            href="https://en.wikipedia.org/wiki/Cryptographic_hash_function"
            className="underline text-yellow-100"
          >
            cryptographic hash functions
          </a>
          . Each block is identified by a hash made from the data it contains,
          the previous block's hash and other parameters like a timestamp,
          difficulty and nonce.
        </p>

        <p className="mt-5">
          The difficulty (or target) represents how many zeros a block's hash
          needs to start with so it can be added to the blockchain. To mine a
          block we increment the value of the nonce until we generate a hash
          that satisfies the difficulty requirements of the blockchain.
        </p>

        <p className="mt-5">
          Flipping a single bit of any block in the chain causes an avalanche
          effect on the hashes of all following blocks. This makes it very easy
          for any node in a decentralized{' '}
          <a
            href="https://en.wikipedia.org/wiki/Peer-to-peer"
            className="underline text-yellow-100"
          >
            peer-to-peer network
          </a>{' '}
          to verify the integrity of the blocks.
        </p>

        <p className="mt-5">
          In this example we use the same Block Header structure that{' '}
          <a
            href="https://en.bitcoin.it/wiki/Block_hashing_algorithm"
            className="underline text-yellow-100"
          >
            Bitcoin uses
          </a>
          . You can manually mine the block by increasing the nonce and checking
          if it satisfies the difficulty, or you can mine it automatically and
          add it to the chain. Any difficulty over 4 will lag and slow down your
          web browser. For some perspective, the current difficulty of Bitcoin
          <a
            href="https://www.blockchain.com/btc/block/00000000000000000001c132ee475b47b64bccbfeb15dcf7dc0a1609d701b220"
            className="underline text-yellow-100"
          >
            is about 20
          </a>
          , and people usually mine it with specialized hardware.
        </p>
      </div>
    </details>
  )
}
