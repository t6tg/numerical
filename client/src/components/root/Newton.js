import React, { useState } from 'react'
import { Input, Label, Button } from '@windmill/react-ui'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import { setting } from '../../config/config'
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from '@windmill/react-ui'

function Newton() {
    const [data, setData] = useState({
        eq: '(x^2)-7',
        x0: 0,
        error: 0.000001,
    })
    const [result, setResult] = useState(null)
    const [submit, setSubmit] = useState(false)

    const graphs = {
        labels: [],
        datasets: [
            {
                label: '# of  Newton',
                data: [],
                fill: false,
                backgroundColor: 'rgb(145, 70, 255)',
                borderColor: 'rgba(145, 70, 255, 0.5)',
            },
        ],
    }

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
                        `${setting.backendURL}/root/newton`,
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
                <div className="mt-10">
                    {result.map((r) => {
                        graphs.labels.push(r.xi)
                        graphs.datasets[0].data.push(r.fxn)
                        return ''
                    })}
                    <Line data={graphs} width={15} height={6} />
                    <div className="my-10">
                        <TableContainer>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableCell>Iteration</TableCell>
                                        <TableCell>xi</TableCell>
                                        <TableCell>fx</TableCell>
                                        <TableCell>diffx</TableCell>
                                        <TableCell>error</TableCell>
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
                                                    {r.xi}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-sm">
                                                    {r.fx}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-sm">
                                                    {r.diffx}
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
                </div>
            )}
        </div>
    )
}

export default Newton
