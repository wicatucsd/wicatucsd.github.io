import { useEffect, useState } from "react";
import Papa from "papaparse";

function useCsvData<T>(csvPath: string): T[] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    fetch(csvPath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data as T[]);
          },
        });
      });
  }, [csvPath]);

  return data;
}

export default useCsvData;