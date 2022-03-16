import { FC } from "react";

interface ButtonBy20 {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const IncreaseValueBy20: FC<ButtonBy20> = ({ setValue }) => {
  return (
    <div>
      <button onClick={() => setValue((value) => value + 20)}>Increase By 20</button>
    </div>
  );
};

export default IncreaseValueBy20;
