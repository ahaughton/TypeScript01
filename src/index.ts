import fs from "fs";

const transactions = fs
  .readFileSync("Statement for 05012019.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .filter(istransactionrow
  );

function istransactionrow(value: string) {
  const row: string[] = value.split(",");
  if (parseInt(row[2]) > 1) return value;
}

console.log(transactions);
