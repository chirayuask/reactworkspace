import React, { useState } from 'react'

export const RecursiveOne = () => {
    const [args, setArgs] = useState([
        {
            'name': 'my argument',
            'value': false
        }, {
            'name': 'my argument 02',
            'value': true
        }
    ]);
    const onChangeValueFilters = (argsName, actionType) => {
        setArgs(curr =>
            args.forEach((item) =>
                item.name === argsName ? { ...item, value: actionType } : item
            )
        )
    }

    return (
        <div>
            <ul>
                {args.map((argument, idx) => (
                    <li>
                        <input value={argument.name} />
                        <select onChange={(e) => onChangeValueFilters(argument.name, e.target.value === "true")} value={argument.value}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </li>
                ))}

            </ul>

        </div>
    )
}