/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LayoutContext } from '../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '../../types/types';
import { ChartData, ChartOptions } from 'chart.js';

const lineData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
};
interface RadioButtonListProps {
    name: string;
    dataList: string[];
    value: string;
    setValue: (value: string) => void;
}
const RadioButtonList: React.FC<RadioButtonListProps> = ({ name, dataList, value, setValue }) => {
    return (
        <>
            {dataList.map((data, index) =>
            (
                <div key={index} className="col-12 md:col-4">
                    <div className="field-radiobutton">
                        <RadioButton inputId={name + '_' + index} name="option" value={data} checked={value == data} onChange={(e) => { setValue(data) }} />
                        <label htmlFor={name + '_' + index}>{data.charAt(0).toUpperCase() + data.slice(1)}</label>
                    </div>
                </div>
            )
            )}
        </>
    )
}
interface CheckboxListProps {
    name: string;
    dataList: string[];
    value: string[];
    setValue: (value: string[]) => void;
}
const CheckboxList: React.FC<CheckboxListProps> = ({ name, dataList, value, setValue }) => {
    const onCheckboxChange = (e: CheckboxChangeEvent) => {
        let selectedValue = [...value];
        if (e.checked) selectedValue.push(e.value);
        else selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setValue(selectedValue);
    };

    return (
        <>
            {dataList.map((data, index) =>
            (
                <div key={index} className="col-12 md:col-4">
                    <div className="field-radiobutton">
                        <Checkbox inputId={name + '_' + index} name="option" value={data} checked={value.indexOf(data) !== -1} onChange={onCheckboxChange} />
                        <label htmlFor={name + '_' + index}>{data.charAt(0).toUpperCase() + data.slice(1)}</label>
                    </div>
                </div>
            )
            )}
        </>
    )
}

const Dashboard = () => {

    const [typeClothes, setTypeClothes] = useState(null);
    const [skirtLength, setSkirtLength] = useState<string[]>([]);
    const [patterns, setPatterns] = useState<string[]>([]);
    const [styles, setStyles] = useState<string[]>([]);
    const [fashion, setFashion] = useState(null);
    const [pantsLength, setPantsLength] = useState<string[]>([]);

    useEffect(() => {
    }, []);


    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Rodzaj ubrań</h5>
                    <div className="grid">
                        <RadioButtonList name="typeClothes" dataList={['spodnie', 'sukienki', 'mix']} value={typeClothes} setValue={setTypeClothes} />
                    </div>
                </div>
                <div className="card">
                    <h5>Preferowana długość spódnicy</h5>
                    <div className="grid">
                        <CheckboxList name="skirtLength" dataList={['mini', 'przed kolano', 'midi', 'maxi']} value={skirtLength} setValue={setSkirtLength} />
                    </div>
                </div>
                <div className="card">
                    <h5>Wzory których nie chcesz nosić</h5>
                    <div className="grid">
                        <CheckboxList name="patterns" dataList={['kwiatki','groszki','napisy','logo','moro','zwierzęce','pepitka','kratka','paski','wszystkie lubię']} value={patterns} setValue={setPatterns} />
                    </div>
                </div>
                <div className="card">
                    <h5>Styl, który jest Tobie najbliższy</h5>
                    <div className="grid">
                        <CheckboxList name="styles" dataList={['boho','glamour','vintige','rockowy','smart casual','minimalistyczny','romantyczny','sportowy']} value={styles} setValue={setStyles} />
                    </div>
                </div>
                <div className="card">
                    <h5>Wybierz swój fason</h5>
                    <div className="grid">
                        <RadioButtonList name="fashion" dataList={['petit','regular','tall','plus size','over size']} value={fashion} setValue={setFashion} />
                    </div>
                </div>
                {/* kolory */}
                <div className="card">
                    <h5>Spodnie z jaką długością nogawek preferujesz</h5>
                    <div className="grid">
                        <CheckboxList name="pantsLength" dataList={['do kostki', 'regular', 'długie']} value={pantsLength} setValue={setPantsLength} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
