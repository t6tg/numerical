import React, { useState } from 'react'
import { Label, Input, Button } from '@windmill/react-ui'
import axios from 'axios'
import { setting } from '../../config/config'

const Poly = () => {
    const [N, setN] = useState(0)
    const [order, setOrder] = useState(0)
    const [X, setX] = useState({})
    const [Y, setY] = useState({})
    const [result, setResult] = useState(null)

    return (
        <div className="p-10 bg-white dark:bg-gray-700 rounded-md shadow-lg my-5">
            <Label>
                <span>N : </span>
                <Input
                    className="my-2"
                    type="number"
                    min="0"
                    max="10"
                    onChange={(e) => setN(parseInt(e.target.value))}
                />
            </Label>
            <div className="grid grid-flow-col gap-1">
                {N > 0 &&
                    N <= 10 &&
                    Array.from(Array(N), (r, i) => {
                        return (
                            <div className="my-2" key={i}>
                                <Label>
                                    <span>X[{i + 1}]</span>
                                    <Input
                                        className="my-2"
                                        type="number"
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setX({
                                                ...X,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Label>
                            </div>
                        )
                    })}
            </div>
            <div className="grid grid-flow-col gap-1">
                {N > 0 &&
                    N <= 10 &&
                    Array.from(Array(N), (r, i) => {
                        return (
                            <div className="my-2" key={i}>
                                <Label>
                                    <span>Y[{i + 1}]</span>
                                    <Input
                                        className="my-2"
                                        type="number"
                                        id={`y${i}`}
                                        onChange={(e) => {
                                            setY({
                                                ...Y,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Label>
                            </div>
                        )
                    })}
            </div>
            <Label>
                <span>Order : </span>
                <Input
                    className="my-2"
                    type="number"
                    min="0"
                    max="10"
                    onChange={(e) => setOrder(parseInt(e.target.value))}
                />
            </Label>
            <Button
                size="regular"
                block
                className="mt-5"
                onClick={async () => {
                    const res = await axios.post(
                        `${setting.backendURL}/regression/poly`,
                        { x: X, y: Y, order }
                    )
                    setResult(JSON.parse(res.request.response))
                }}
            >
                Calculate
            </Button>
            {result != null && (
                <div>
                    <Label className="my-4 text-2xl bg-gray-300 rounded-md p-3 dark:bg-gray-800">
                        <span>Result : </span>
                        {JSON.stringify(result.data.string)}
                    </Label>
                    <Label className="my-4 text-2xl bg-gray-300 rounded-md p-3 dark:bg-gray-800">
                        <span>Ans : </span>
                        {JSON.stringify(result.data.equation)}
                    </Label>
                </div>
            )}
        </div>
    )
}

export default Poly
