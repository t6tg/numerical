import React, { useState } from 'react'
import { Input, Label, Button } from '@windmill/react-ui'
import { setting } from '../../config/config'
import axios from 'axios'
import NTable from '../Table'

function FalsePosition() {
    const [data, setData] = useState({
        xl: 0,
        xr: 0,
        error: 0,
    })
    const [result, setResult] = useState(null)
    const [submit, setSubmit] = useState(false)

    return (
        <div className="p-10 bg-white dark:bg-gray-700 rounded-md shadow-lg my-5">
            <Label>
                <span>Equation : </span>
                <Input
                    className="my-2 outline-none"
                    defaultValue="(x^4)-13"
                    disabled
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
                        `${setting.backendURL}/root/falsePosition`,
                        data
                    )
                    if (res.data.data.length !== 0) {
                        setSubmit(true)
                    }
                    setResult(JSON.parse(res.request.response).data)
                }}
            >
                Calculate
            </Button>
            {result !== null && submit && (
                <NTable
                    Thead={['Iteration', 'XL', 'XR', 'X1', 'Error']}
                    Tbody={result}
                />
            )}
        </div>
    )
}

export default FalsePosition
