import { useMemo, useState } from "react";

type ExpCaclType = {
  Num: number;
};

// const ExpCacl: React.FC<ExpCaclType> = ({ Num }) => {
//   const sqrNum = useMemo(() => {
//     console.log("Cal Square");
//     return Num * Num;
//   },[Num]);
//   return <h1> Square Number Is : {sqrNum} </h1>;
// };

//useMemo
const MemoExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [Num, setNum] = useState(2);
  console.log("Render");

  const sqrNum = useMemo(() => {
    console.log("Cal Square");
    return Num * Num;
  },[Num]);

  return (
    <div>
      <button onClick={() => setNum(Num + 1)}>
        InCreament {`Num : ${sqrNum}`}
      </button>
      <button onClick={() => setCount(count + 1)}>
        Re-Render {`Count : ${count}`}
      </button>
    </div>
  );
};

export default MemoExample;
