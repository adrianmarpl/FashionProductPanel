/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

interface RadioButtonListProps {
    name: string;
    dataList: string[];
    value: string;
    setValue: (value: string) => void;
}
class Color {
    name: string;
    hex: string;
    constructor(name: string, hex: string) {
        this.name = name;
        this.hex = hex;
    }

}
class Product {
    name: string;
    image: string;
    description: string;
    link: string;
    constructor(name: string, image: string, description: string, link: string) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.link = link;
    }
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

const ProductInfo: React.FC<any> = ({ product }) => {
    // console.log('product', product);
    return (
        <div className="col-12 md:col-4">
            <a href={product.link} target="_blank" rel="noreferrer">
                <div className="card" style={{textAlign: 'center'}}>
                    <img src={product.image} alt={product.name} />
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                </div>
            </a>
        </div>
    )
}

const buildColorList = () => {
    let colors: Color[];
    colors = [];
    colors.push(new Color('biały', '#FFFFFF'));
    colors.push(new Color('czarny', '#000000'));
    colors.push(new Color('brązowy', '#A52A2A'));
    colors.push(new Color('różowy', '#FFC0CB'));
    colors.push(new Color('fioletowy', '#800080'));
    colors.push(new Color('żółty', '#FFFF00'));
    colors.push(new Color('zielony', '#008000'));
    colors.push(new Color('niebieski', '#0000FF'));
    colors.push(new Color('czerwony', '#FF0000'));
    colors.push(new Color('pomarańczowy', '#FFA500'));
    colors.push(new Color('beżowy', '#F5F5DC'));
    colors.push(new Color('szary', '#808080'));

    return colors;
}

const Dashboard = () => {
    //let url = 'http://domnet.ddns.net:8000';
    let url = 'http://localhost:8000'

    const skirtList = ['mini', 'przed kolano', 'midi', 'maxi'];
    const stylesList = ['boho', 'glamour', 'vintige', 'rockowy', 'smart casual', 'minimalistyczny', 'romantyczny', 'sportowy'];
    const patternList = ['kwiatki', 'groszki', 'napisy', 'logo', 'moro', 'zwierzęce', 'pepitka', 'kratka', 'paski']; //,'wszystkie lubię'
    const pantsList = ['do kostki', 'regular', 'długie'];
    const colorsList = buildColorList();

    const [typeClothes, setTypeClothes] = useState('mix');
    const [skirtLength, setSkirtLength] = useState<string[]>(skirtList);
    const [patterns, setPatterns] = useState<string[]>(patternList);
    const [styles, setStyles] = useState<string[]>(stylesList);
    const [colors, setColors] = useState<string[]>([]);
    const [fashion, setFashion] = useState('regular');
    const [pantsLength, setPantsLength] = useState<string[]>(pantsList);

    const [visibleProducts, setVisibleProducts] = useState(false);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);

    const [generateIndex, setGenerateIndex] = useState(0);

    const generate = () => {
        console.log('generate');
        setVisibleProducts(true);
        setLoading(true);
        setGenerateIndex(0);
        setProducts([]);
        setProducts2([]);
        setProducts3([]);
        let colorsResult = colorsList.map(x => x.name).filter(color => !colors.includes(color));

        console.log('typeClothes', typeClothes);
        console.log('skirtLength', skirtLength);
        console.log('patterns', patterns);
        console.log('styles', styles);
        console.log('fashion', fashion);
        console.log('pantsLength', pantsLength);

        const data = {
            typeClothes: typeClothes == "mix" ? ['spodnie', 'sukienka'] : [typeClothes],
            skirtLength: skirtLength,
            patterns: patterns,
            styles: styles,
            fashion: [fashion],
            colors: colorsResult,
            pantsLength: pantsLength
        };
        var generateProducts = fetch(url + '/query-items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .catch((error) => console.error('Error:', error));
        generateProducts.then((data) => {
            console.log('products: ', data);
            setProducts(data.result1);
            setProducts2(data.result2);
            setProducts3(data.result3);
            setLoading(false);
        });
    }

    const generateNext = () => {
        generate();
        //setGenerateIndex(generateIndex + 1);
    }

    useEffect(() => {
        function handleKeyDown(e) {
            console.log('key', e.keyCode)
            if (e.keyCode == 32) {
                console.log('key!', e.keyCode)
                generate();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);


    return (
        <div >
            {!visibleProducts && <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Rodzaj ubrań</h5>
                        <div className="grid">
                            <RadioButtonList name="typeClothes" dataList={['spodnie', 'sukienka', 'mix']} value={typeClothes} setValue={setTypeClothes} />
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
                            <RadioButtonList name="fashion" dataList={['petit', 'regular', 'tall', 'plus size', 'over size']} value={fashion} setValue={setFashion} />
                        </div>
                    </div>
                    <div className="card">
                        <h5>Spodnie z jaką długością nogawek preferujesz</h5>
                        <div className="grid">
                            <CheckboxList name="pantsLength" dataList={pantsList} value={pantsLength} setValue={setPantsLength} />
                        </div>
                    </div>
                    <div className="card">
                        <h5>Wykreśl kolory, których nie założysz</h5>
                        <div className="grid">
                            <CheckboxList name="colors" dataList={(colorsList.map((color) => color.name))} value={colors} setValue={setColors} />
                        </div>
                    </div>
                </div>
                <div className='floating-button'>
                    <Button label="Wygeneruj" rounded onClick={(e) => generate()} />
                </div>
            </div>}
            {loading && <div className='loading-panel'><ProgressSpinner /></div>}
            {visibleProducts && !loading &&
                <div className="grid">
                    {products2.length > generateIndex + 1 &&
                        <ProductInfo product={products2[generateIndex]}></ProductInfo>
                    }
                    {products.length > generateIndex + 1 &&
                        <ProductInfo product={products[generateIndex]}></ProductInfo>
                    }
                    {products3.length > generateIndex + 1 &&
                        <ProductInfo product={products3[generateIndex]}></ProductInfo>
                    }

                    <div className='floating-button'>
                        <Button label="Następna" rounded onClick={(e) => generateNext()} />
                    </div>
                </div>
            }
        </div>
    );
};

export default Dashboard;
