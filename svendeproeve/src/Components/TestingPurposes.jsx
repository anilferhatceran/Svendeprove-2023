import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCases } from "../Features/cases/caseSlice";

function TestingPurposes() {
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state.case);

  useEffect(() => {
    dispatch(getAllCases());

    console.log(cases);
  }, []);

  return <div></div>;
}

export default TestingPurposes;
