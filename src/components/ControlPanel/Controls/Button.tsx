type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

interface ButtonProps extends DefaultButtonProps {
  extraStyles?: string[]
}

export const Button: React.FC<ButtonProps> = ({
  extraStyles = [],
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={[
        `w-full
        text-white
        font-medium
        px-5
        py-3
        rounded-md
        block
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-gray-800
        focus:ring-indigo-500`,
        ...extraStyles,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
}
