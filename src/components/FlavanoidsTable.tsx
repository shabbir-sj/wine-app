import { memo } from "react";
import {
  GroupWineAttribute,
  calculateFlavanoidsMean,
  calculateFlavanoidsMedian,
  calculateFlavanoidsMode,
} from "../_helpers";

// Table for showing Flavanoids stats (Mean, Median, Mode)
const DataTable: React.FC<{ data: GroupWineAttribute[] }> = ({
  data,
}) => {
  const flavanoidsMeans = data.map((item) => calculateFlavanoidsMean(item.data));
  const flavanoidsMedians = data.map((item) => calculateFlavanoidsMedian(item.data));
  const flavanoidsModes = data.map((item) => calculateFlavanoidsMode(item.data));

  return (
    <table className="wine-table">
    <thead>
        <tr>
        <th>Measure</th>
        { data.map((item, index) => (<th key={'head-' + index}>{"Class " + item.name}</th>)) }
        </tr>
    </thead>
    <tbody>
        <tr>
        <th>Flavanoids Mean</th>
        { flavanoidsMeans.map((item, index) => (<td key={'mean-' + index}>{item}</td>)) }
        </tr>
        <tr>
        <th>Flavanoids Median</th>
        { flavanoidsMedians.map((item, index) => (<td key={'median-' + index}>{item}</td>)) }
        </tr>
        <tr>
        <th>Flavanoids Mode</th>
        { flavanoidsModes.map((item, index) => (<td key={'mode-' + index}>{item}</td>)) }
        </tr>
    </tbody>
    </table>
  );
};

export const FlavanoidsTable =  memo(DataTable);
