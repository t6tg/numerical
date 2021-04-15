import React, { useState } from 'react'
import { Input, Label, Button } from '@windmill/react-ui'
import { setting } from '../../config/config'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import NTable from '../Table'

function Bisection() {
    const [data, setData] = useState({
        eq: 'x^4-13',
        xl: 0,
        xr: 0,
        error: 0.000001,
    })
    const [result, setResult] = useState(null)

    const graphs = {
        labels: [],
        datasets: [
            {
                label: '# of  Bisection',
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
                    defaultValue="x^4-13"
                    onChange={(e) => setData({ ...data, eq: e.target.value })}
                />
            </Label>
            <Label>
                <span>XL : </span>
                <Input
                    className="my-2"
                    type="number"
                    onChange={(e) => {
                        setData({
                            ...data,
                            xl: parseFloat(e.target.value),
                        })
                    }}
                />
            </Label>

            <Label>
                <span>XR : </span>
                <Input
                    className="my-2"
                    type="number"
                    onChange={(e) => {
                        setData({
                            ...data,
                            xr: parseFloat(e.target.value),
                        })
                    }}
                />
            </Label>
            <Label>
                <span>ERROR : </span>
                <Input
                    className="my-2"
                    type="number"
                    placeholder="Optional"
                    onChange={(e) => {
                        setData({
                            ...data,
                            error: parseFloat(e.target.value),
                        })
                    }}
                />
            </Label>
            <Button
                size="regular"
                block
                className="mt-5"
                onClick={async () => {
                    const res = await axios.post(
                        `${setting.backendURL}/root/bisection`,
                        data
                    )
                    setResult(JSON.parse(res.request.response).data)
                }}
            >
                Calculate
            </Button>
            {result !== null && (
                <div className="mt-10">
                    {result.map((r) => {
                        graphs.labels.push(r.xm)
                        graphs.datasets[0].data.push(r.fxn)
                        return ''
                    })}
                    <Line data={graphs} width={15} height={6} />
                    <NTable
                        key={result.iteration}
                        Thead={['Iteration', 'XL', 'XR', 'XM', 'Error']}
                        Tbody={result}
                    />
                </div>
            )}
        </div>
    )
}

export default Bisection
