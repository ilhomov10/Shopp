import { FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import qidiruvIcon from "../assets/images/qidiruv.svg";

interface QidiruvProps {
  setSearch: (value: string) => void;
}

const Qidiruv: FC<QidiruvProps> = ({ setSearch }) => {
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value, 500);

  useEffect(() => {
    setSearch(debouncedValue.trim());
  }, [debouncedValue, setSearch]);

  return (
    <div className="qidiruv_wrapper">
      <input
        type="text"
        className="qidiruv"
        placeholder="Qidiruv..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img src={qidiruvIcon} alt="Qidiruv" className="qidiruv_icon" />
    </div>
  );
};

export default Qidiruv;


  



