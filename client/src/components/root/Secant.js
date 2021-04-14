import React, { useState } from 'react'
import { Input, Label, Button } from '@windmill/react-ui'
import axios from 'axios'
import { setting } from '../../config/config'
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from '@windmill/react-ui'

function Secant() {
    const [data, setData] = useState({
        eq: '(x^2)-7',
        x0: 0,
        x1: 0,
        error: 0.000001,
    })
    const [result, setResult] = useState(null)
    const [submit, setSubmit] = useState(false)
    return (
        <div className="p-10 bg-white dark:bg-gray-700 rounded-md shadow-lg my-5">
            <Label>
                <span>Equation : </span>
                <Input
                    className="my-2 outline-none"
                    defaultValue="(x^2)-7"
                    onChange={(e) => setData({ ...data, eq: e.target.value })}
                />
            </Label>
            <Label>
                <span>X0 : </span>
                <Input
                    className="my-2"
                    type="number"
                    onChange={(e) => setData({ ...data, x0: e.target.value })}
                />
            </Label>
            <Label>
                <span>X1 : </span>
                <Input
                    className="my-2"
                    type="number"
                    onChange={(e) => setData({ ...data, x1: e.target.value })}
                />
            </Label>
            <Label>
                <span>ERROR : </span>
                <Input
                    className="my-2"
                    type="number"
                    placeholder="Optional"
                    onChange={(e) =>
                        setData({ ...data, error: e.target.value })
                    }
                />
            </Label>
            <Button
                size="regular"
                block
                className="mt-5"
                onClick={async () => {
                    const res = await axios.post(
                        `${setting.backendURL}/root/secant`,
                        data
                    )
                    setResult(JSON.parse(res.request.response).data)
                    if (res.data.data.length !== 0) {
                        setSubmit(true)
                    }
                }}
            >
                Calculate
            </Button>
            {result !== null && submit && (
                <div className="my-10">
                    <TableContainer>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell>Iteration</TableCell>
                                    <TableCell>x0</TableCell>
                                    <TableCell>x1</TableCell>
                                    <TableCell>fx0</TableCell>
                                    <TableCell>fx1</TableCell>
                                    <TableCell>ΔX</TableCell>
                                    <TableCell>xi</TableCell>
                                    <TableCell>Error</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {result.map((r) => (
                                    <TableRow key={r.iteration}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <span className="font-semibold ml-2">
                                                    {r.iteration}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.x0}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.x1}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.fx0}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.fx1}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.deltax}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.xi}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.er}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    )
}

export default Secant
