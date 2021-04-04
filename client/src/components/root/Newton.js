import React from 'react'
import { Input, Label, Button } from '@windmill/react-ui'

function Newton() {
    return (
        <div className="p-10 bg-white dark:bg-gray-700 rounded-md shadow-lg my-5">
            <Label>
                <span>Equation : </span>
                <Input
                    className="my-2 outline-none"
                    defaultValue="(x^2)-7"
                    disabled
                />
            </Label>
            <Label>
                <span>X0 : </span>
                <Input className="my-2" type="number" />
            </Label>
            <Label>
                <span>ERROR : </span>
                <Input className="my-2" type="number" placeholder="Optional" />
            </Label>
            <Button size="regular" block className="mt-5">
                Calculate
            </Button>
        </div>
    )
}

export default Newton
