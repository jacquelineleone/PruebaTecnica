import { Link } from "react-router-dom";
import "./Table.css";
import { useTable } from "react-table";

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead className="thead">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="tbody">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>
                  <Link to={`/Libro/${cell.row.id}`} className="link">
                    {cell.render("Cell")}
                  </Link>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
