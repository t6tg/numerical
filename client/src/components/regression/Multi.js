import React, { useState } from 'react'
import { Label, Input, Button } from '@windmill/react-ui'
import axios from 'axios'
import { setting } from '../../config/config'

const Multi = () => {
    const [N, setN] = useState(0)
    const [X1, setX1] = useState({})
    const [X2, setX2] = useState({})
    const [X3, setX3] = useState({})
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
                                    <span>X[1,{i}]</span>
                                    <Input
                                        className="my-2"
                                        type="number"
                                        id={`x1${i}`}
                                        onChange={(e) => {
                                            setX1({
                                                ...X1,
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
                                    <span>X[2,{i + 1}]</span>
                                    <Input
                                        className="my-2"
                                        type="number"
                                        id={`x2${i}`}
                                        onChange={(e) => {
                                            setX2({
                                                ...X2,
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
                                    <span>X[3,{i + 1}]</span>
                                    <Input
                                        className="my-2"
                                        type="number"
                                        id={`x3${i}`}
                                        onChange={(e) => {
                                            setX3({
                                                ...X3,
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
            <Button
                size="regular"
                block
                className="mt-5"
                onClick={async () => {
                    const res = await axios.post(
                        `${setting.backendURL}/regression/multi`,
                        { x1: X1, x2: X2, x3: X3, y: Y }
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
                        {JSON.stringify(result.data)}
                    </Label>
                </div>
            )}
        </div>
    )
}

export default Multi
