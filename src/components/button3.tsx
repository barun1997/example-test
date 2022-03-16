import { FC } from "react";

interface ButtonBy30 {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const IncreaseValueBy30: FC<ButtonBy30> = ({ setValue }) => {
  return (
    <div>
      <button onClick={() => setValue((value) => value + 30)}>Increase By 30</button>
    </div>
  );
};

export default IncreaseValueBy30;
