import { useState, useEffect } from 'react';
import openEye from '../assets/images/password-visible.svg'
import closedEye from '../assets/images/password-not-visible.svg'

interface Props {
  placeholder: string;
  type: string;
  name: string;
  className: string;
  onChange: () => void;
  value: string;
}

export default function Inputs({ placeholder, type, name, onChange, className, value }: Props) {
  const [visible, setVisibility] = useState(false);
  const [inputType, setInputType] = useState(type);
  const eyeIcon = visible ? closedEye : openEye;
  const isEmpty = value ? 'not-empty' : '';
  useEffect(() => {
    const checkType = () => {
      if (type === 'password') {
        setInputType(visible ? 'text' : 'password');
        return;
      }
    }
    checkType();
  }, [visible, type])
  return (
    <div className="inputs">
      <div className={`${isEmpty} input-block`} data-placeholder={placeholder}>
        <input
          className={className}
          type={inputType}
          name={name}
          onChange={onChange}
          value={value}
        />
        {
          type === 'password'
          &&
          <input
            className="show-password"
            type="image"
            alt="show password"
            src={eyeIcon}
            onClick={(e) => {
              e.preventDefault();
              setVisibility(!visible)
            }}
          />
        }
      </div>
    </div>
  )
}
