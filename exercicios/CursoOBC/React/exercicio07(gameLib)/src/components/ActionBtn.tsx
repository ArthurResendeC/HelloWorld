interface ActionBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    byclick?: (id: number) => void;
  }
  
  export default function ActionBtn({ text, byclick, ...rest }: ActionBtnProps) {

    return (
      <button
        {...rest}
        className="py-2 bg-black text-white font-semibold hover:border-blue-700 border-2 border-black transition-all rounded-lg shadow-md w-36"
      >
        {text}
      </button>
    );
  }
  