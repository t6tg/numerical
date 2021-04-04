import React from 'react'
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from '@windmill/react-ui'

function NTable({ Thead, Tbody }) {
    return (
        <div className="my-10">
            <TableContainer>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {Thead.map((r) => (
                                <TableCell>{r}</TableCell>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Tbody.map((r) => (
                            <TableRow key={r.iteration}>
                                <TableCell>
                                    <div className="flex items-center text-sm">
                                        <span className="font-semibold ml-2">
                                            {r.iteration}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{r.xl}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{r.xr}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{r.xm}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{r.er}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default NTable
