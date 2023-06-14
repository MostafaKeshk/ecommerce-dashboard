import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import UserProfile from "../../general/UserProfile";
import { ccyFormat } from "../../../utils/ccyFormat";

type IProps = {
  taxRate: any;
  heads: any;
  rows: any;
  invoiceSubtotal: any;
  invoiceTaxes: any;
  invoiceTotal: any;
};

const OrderDetailsTable: React.FC<IProps> = ({
  taxRate,
  heads,
  rows,
  invoiceSubtotal,
  invoiceTaxes,
  invoiceTotal,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {heads.map((head: any, headIndex: number) => (
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: 16,
                  px: 1,
                }}
                align={head.align}
                key={head.label || headIndex}
              >
                {head.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <UserProfile image={row.image} name={row.name} />
              </TableCell>

              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                {ccyFormat(row.qty * row.price)}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2} rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(taxRate * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderDetailsTable;
