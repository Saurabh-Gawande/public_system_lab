import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Graph() {
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    const excel = async () => {
      const response = await fetch("/data/punjab.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      jsonData.shift();
      const formattedData = jsonData.map((row) => ({
        name: row[0],
        Supply: row[1],
        Demand: row[2],
      }));
      setExcelData(formattedData);
    };
    excel();
  }, []);

  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: "bold",
      }}
    >
      <BarChart
        width={1200}
        height={600}
        data={excelData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={15} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Supply" fill="#008000" />
        <Bar dataKey="Demand" fill="#FF0000" />
      </BarChart>
    </div>
  );
}

export default Graph;
