import styles from './index.module.css'

export const Footer = () => {
  return (
    <section className="flex items-center flex-col bg-blue-800 p-2">
      <a
        href="https://github.com/librity/create_react_mine"
        className="text-white underline text-lg"
      >
        ⌨️ Source Code 🖥️
      </a>
    </section>
  )
}
