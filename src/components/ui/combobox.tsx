import { useState, useEffect } from 'react';

import { Input } from './input';

interface Item {
    label: string;
    value: string;
}

interface IProps {
    id: string;
    options?: Item[] | [];
    placeholder: string;
    noResults: string;
    onSelect?: (value: number | string) => void;
}

export function Combobox({
    id,
    options,
    placeholder,
    noResults,
    onSelect
}: Readonly<IProps>) {
    const [selected, setSelected] = useState<string>('');
    const [optionsShow, setOptionsShow] = useState<boolean>(false);
    const [filteredOptions, setFilteredOptions] = useState<Item[]>([]);

    useEffect(() => {
        if (options) {
            setFilteredOptions(
                options.filter(item => {
                    return item.label
                        .toLocaleLowerCase()
                        .includes(selected.toLocaleLowerCase());
                })
            );
        }
    }, [options, selected]);

    return (
        <button
            className="relative w-full"
            tabIndex={0}
            onBlur={e => {
                if (
                    e.relatedTarget &&
                    e.currentTarget.contains(e.relatedTarget)
                ) {
                    e.preventDefault();
                    return;
                }
                setOptionsShow(false);
            }}
        >
            <div className="relative w-full">
                <Input
                    id={id || ''}
                    className="block w-full py-3 pe-9 ps-4"
                    type="text"
                    aria-expanded="false"
                    placeholder={placeholder}
                    value={selected}
                    onChange={e => {
                        if (e.target.value) {
                            setSelected(e.target.value);
                            setOptionsShow(true);
                            return;
                        }
                        setSelected(e.target.value);
                        setOptionsShow(false);
                    }}
                ></Input>
                <button
                    className="absolute end-3 top-1/2 -translate-y-1/2"
                    aria-expanded="false"
                    onClick={() => {
                        if (options) {
                            setFilteredOptions(options);
                        }
                        setOptionsShow(true);
                    }}
                >
                    <svg
                        className="size-3.5 shrink-0 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                    </svg>
                </button>
            </div>
            <div
                className="absolute z-50 max-h-72 w-full overflow-hidden overflow-y-auto rounded-lg border border-gray-200 bg-white p-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2"
                hidden={!optionsShow}
            >
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((item, index) => (
                        <button
                            key={`${index}-${item.label}`}
                            className="w-full cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            tabIndex={0}
                            data-hs-combo-box-output-item=""
                            onClick={() => {
                                if (onSelect && item.value) {
                                    onSelect(item.value);
                                }
                                setSelected(item.label);
                                setOptionsShow(false);
                            }}
                        >
                            <div className="flex w-full items-center justify-between">
                                <span
                                    data-hs-combo-box-search-text="Argentina"
                                    data-hs-combo-box-value=""
                                >
                                    {item.label}
                                </span>
                                <span className="hs-combo-box-selected:block hidden">
                                    <svg
                                        className="size-3.5 shrink-0 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={'2'}
                                        strokeLinecap={'round'}
                                        strokeLinejoin={'round'}
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                    ))
                ) : (
                    <div className="w-full cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                        <div className="flex w-full items-center justify-between">
                            <span>{noResults}</span>
                            <span className="hs-combo-box-selected:block hidden">
                                <svg
                                    className="size-3.5 shrink-0 text-blue-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={'2'}
                                    strokeLinecap={'round'}
                                    strokeLinejoin={'round'}
                                >
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </button>
    );
}
