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

const Jacob = () => {
    const [data, setData] = useState({
        a11: 0,
        a12: 0,
        a13: 0,
        a21: 0,
        a22: 0,
        a23: 0,
        a31: 0,
        a32: 0,
        a33: 0,
        b11: 0,
        b12: 0,
        b13: 0,
        x1: 0,
        x2: 0,
        x3: 0,
        err: 0,
    })
    const [result, setResult] = useState(null)
    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-4 my-4"
            style={{ maxWidth: '100%' }}
        >
            <div className="grid grid-cols-3 p-10 bg-white dark:bg-gray-700 rounded-md shadow-lg my-5 gap-3">
                <Label>
                    <span>A[1,1]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({
                                ...data,
                                a11: parseFloat(e.target.value),
                            })
                        }
                    />
                </Label>
                <Label>
                    <span>A[1,2]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a12: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>A[1,3]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a13: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>A[2,1]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a21: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>A[2,2]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a22: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>A[2,3]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a23: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>A[3,1]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a31: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>A[3,2]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a32: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>A[3,3]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, a33: e.target.value })
                        }
                    />
                </Label>
            </div>
            <div className="grid grid-cols-3 p-10 bg-white dark:bg-gray-700 rounded-md shadow-lg my-5 gap-3">
                <Label>
                    <span>B[1]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, b11: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>B[2]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, b12: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>B[3]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, b13: e.target.value })
                        }
                    />
                </Label>
            </div>

            <div className="grid grid-cols-3 p-10 bg-white dark:bg-gray-700 rounded-md shadow-lg my-5 gap-3">
                <Label>
                    <span>X[1]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, x1: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>X[2]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, x2: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>X[3]</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, x3: e.target.value })
                        }
                    />
                </Label>
                <Label>
                    <span>Error</span>
                    <Input
                        className="my-2 outline-none"
                        onChange={(e) =>
                            setData({ ...data, err: e.target.value })
                        }
                    />
                </Label>
            </div>

            <div className="my-2">
                <Button
                    size="regular"
                    block
                    onClick={async () => {
                        const res = await axios.post(
                            `${setting.backendURL}/linear/jacob`,
                            data
                        )
                        setResult(JSON.parse(res.request.response).data)
                    }}
                >
                    Calculate
                </Button>
            </div>
            {result !== null && (
                <div className="my-10">
                    <TableContainer>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell>Iteration</TableCell>
                                    <TableCell>X1</TableCell>
                                    <TableCell>X2</TableCell>
                                    <TableCell>X3</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {result.map((r) => (
                                    <TableRow key={r.i}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <span className="font-semibold ml-2">
                                                    {r.i}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.x1}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.x2}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {r.x3}
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

export default Jacob
