import { FC } from "react";

interface ButtonBy10 {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const IncreaseValueBy10: FC<ButtonBy10> = ({ setValue }) => {
  return (
    <div>
      <button onClick={() => setValue((value) => value + 10)}>Increase By 10</button>
    </div>
  );
};

export default IncreaseValueBy10;
