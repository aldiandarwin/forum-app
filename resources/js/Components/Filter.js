import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Inertia } from '@inertiajs/inertia';
import { find } from 'lodash';
export default function Filter({ categories, initialState }) {
    const [selected, setSelected] = useState(initialState);
    const selectedHandler = (value) => {
        setSelected(value);
        Inertia.get('/threads', { category: value }, { preserveState: true });
    };
    return (
        <div className="w-full lg:w-52">
            <Listbox value={selected} onChange={selectedHandler}>
                <div className="relative rounded-lg shadow">
                    <Listbox.Button className="relative w-full h-10 pl-3 pr-10 text-left bg-white rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{initialState ? find(categories, (category) => category.slug == selected).name : 'Choose a Category'}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {categories.map((category, categoryIdx) => (
                                <Listbox.Option
                                    key={categoryIdx}
                                    className={({ active }) =>
                                        `${active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={category.slug}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                            >
                                                {category.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`${active ? 'text-blue-600' : 'text-blue-600'
                                                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
