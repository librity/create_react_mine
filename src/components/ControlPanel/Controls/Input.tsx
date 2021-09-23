type DefaultInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface InputProps extends DefaultInputProps {
  extraStyles?: string[]
}

export const Input: React.FC<InputProps> = ({
  extraStyles = [],
  ...rest
}: InputProps) => {
  return (
    <input
      className={[
        `w-full
        px-5
        text-lg
        py-3
        placeholder-gray-500
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-gray-800
        focus:ring-white
        focus:border-white
        rounded-md`,
        ...extraStyles,
      ].join(' ')}
      {...rest}
    />
  )
}
