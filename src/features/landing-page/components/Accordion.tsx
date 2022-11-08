import 'twin.macro';
import React, { useRef, useState } from 'react';
import { ArrowDownIcon, ArrowRightIcon } from 'assets';

interface AccordionProps {
    title: React.ReactNode;
    content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');

    const contentSpace = useRef(null);

    function toggleAccordion() {
        setActive((prevState) => !prevState);
        // @ts-ignore
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    }

    return (
        <div tw="flex flex-col border-b border-border/30 px-5">
            <button
                tw="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggleAccordion}
            >
                <p tw="inline-block text-dark font-medium text-base">{title}</p>
                <span tw="text-border">{active ? <ArrowDownIcon /> : <ArrowRightIcon />}</span>
            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                tw="overflow-auto duration-300 ease-in-out"
            >
                <div tw="pb-10 pl-5 text-sm md:text-base">{content}</div>
            </div>
        </div>
    );
};
