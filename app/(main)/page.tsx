/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import React, { useContext, useEffect, useRef, useState } from 'react';

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
    const skirtList = ['mini', 'przed kolano', 'midi', 'maxi'];
    const stylesList = ['boho','glamour','vintige','rockowy','smart casual','minimalistyczny','romantyczny','sportowy'];
    const patternList = ['kwiatki','groszki','napisy','logo','moro','zwierzęce','pepitka','kratka','paski','wszystkie lubię'];
    const pantsList = ['do kostki', 'regular', 'długie'];

    const [typeClothes, setTypeClothes] = useState('mix');
    const [skirtLength, setSkirtLength] = useState<string[]>(skirtList);
    const [patterns, setPatterns] = useState<string[]>(patternList);
    const [styles, setStyles] = useState<string[]>(stylesList);
    const [colors, setColors] = useState<string[]>(['czerwony','zielony','biały']);
    const [fashion, setFashion] = useState('regular');
    const [pantsLength, setPantsLength] = useState<string[]>(pantsList);



    const generate = () => {
        console.log('typeClothes', typeClothes);
        console.log('skirtLength', skirtLength);
        console.log('patterns', patterns);
        console.log('styles', styles);
        console.log('fashion', fashion);
        console.log('pantsLength', pantsLength);
        const data = {
            typeClothes: [typeClothes],
            skirtLength: skirtLength,
            patterns: patterns,
            styles: styles,
            fashion: [fashion],
            colors: colors,
            pantsLength: pantsLength
        };
        var generateProducts = fetch('http://localhost:8000/query-items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        // .then(data => console.log('resp: ',data))
        .catch((error) => console.error('Error:', error));
        generateProducts.then((data) => {
            console.log('products: ', data);
        });
    }

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
                        <CheckboxList name="skirtLength" dataList={skirtList} value={skirtLength} setValue={setSkirtLength} />
                    </div>
                </div>
                <div className="card">
                    <h5>Wzory których nie chcesz nosić</h5>
                    <div className="grid">
                        <CheckboxList name="patterns" dataList={patternList} value={patterns} setValue={setPatterns} />
                    </div>
                </div>
                <div className="card">
                    <h5>Styl, który jest Tobie najbliższy</h5>
                    <div className="grid">
                        <CheckboxList name="styles" dataList={stylesList} value={styles} setValue={setStyles} />
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
                        <CheckboxList name="pantsLength" dataList={pantsList} value={pantsLength} setValue={setPantsLength} />
                    </div>
                </div>
            </div>
            <div className='floating-button'>
                <Button label="Wygeneruj" rounded onClick={(e)=>generate()} />
            </div>
        </div>
    );
};

export default Dashboard;
