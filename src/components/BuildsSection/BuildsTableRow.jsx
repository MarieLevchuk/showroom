import { Box, Container, Paper, TableCell, TableRow } from "@mui/material";

export default function BuildsTableRow({build}){
    return(
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell>{build.carModel}</TableCell>
            <TableCell>{build.color}</TableCell>
            <TableCell>{build.interior}</TableCell>
            <TableCell>{build.fuel}</TableCell>
            <TableCell>{build.transmission}</TableCell>
            <TableCell>{build.persons}</TableCell>
        </TableRow>
    );
}