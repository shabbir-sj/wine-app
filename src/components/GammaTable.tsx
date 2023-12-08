import { memo } from "react";
import {
  GroupWineAttribute,
  calculateGammaMean,
  calculateGammaMedian,
  calculateGammaMode,
} from "../_helpers";

// Table for showing Gamma stats (Mean, Median, Mode)
const DataTable: React.FC<{ data: GroupWineAttribute[] }> = ({ data }) => {

  const gammaMeans = data.map((item) => calculateGammaMean(item.data));
  const gammaMedians = data.map((item) => calculateGammaMedian(item.data));
  const gammaModes = data.map((item) => calculateGammaMode(item.data));

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
            <th>Gamma Mean</th>
            { gammaMeans.map((item, index) => (<td key={'mean-' + index}>{item}</td>)) }
        </tr>
        <tr>
            <th>Gamma Median</th>
            { gammaMedians.map((item, index) => (<td key={'median-' + index}>{item}</td>)) }
        </tr>
        <tr>
            <th>Gamma Mode</th>
            { gammaModes.map((item, index) => (<td key={'mode-' + index}>{item}</td>)) }
        </tr>
    </tbody>
    </table>
  );
};

export const GammaTable = memo(DataTable);
