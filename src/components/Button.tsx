import { Link } from 'react-router-dom';

interface ButtonProps {
  disabled: boolean;
  name: string;
  link: string;
  color: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ disabled, name, link, color, onClick }) => {
  return (
    <Link to={link}>
      <button
        disabled={disabled}
        type="submit"
        onClick={onClick}
        className={`btn ${color} `}
      >
        {name}
      </button>
    </Link>
  )
}

export default Button;
