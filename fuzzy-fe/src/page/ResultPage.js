import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

const TITLE = {
    population: 'Dân số (triệu người)',
    gdp: 'GDP (triệu USD)',
    gdpPerCapita: 'GDP bình quân đầu người (USD)',
    unemploymentRate: 'Tỷ lệ thất nghiệp (%)'
}

const POPULATION_LABEL = {
    SP: 'Nhỏ',
    MP: 'Vừa',
    LP: 'Lớn'
}

const GDP_LABEL = {
    VL: 'Rất thấp',
    LO: 'Thấp',
    ME: 'Trung bình',
    HI: 'Cao',
    VH: 'Rất cao',
}

const GDP_PER_CAPITA_LABEL = {
    LPC: 'Thấp',
    MPC: 'Trung bình',
    HPC: 'Cao'
}

const UNEMPLOYMENT_RATE_LABEL = {
    LUR: 'Thấp',
    MUR: 'Trung bình',
    HUR: 'Cao'
}

const ECONOMY_LABEL = {
    LOW: 'Kém phát triển',
    MEDIUM: 'Phát triển bình thường',
    HIGH: 'Phát triển tốt'
}

function ResultPage(props) {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState();
    const [dataSource, setDataSource] = useState();
    const population = searchParams.get('population')
    const gdp = searchParams.get('gdp')
    const gdpPerCapita = searchParams.get('gdpPerCapita')
    const unemploymentRate = searchParams.get('unemploymentRate')

    useEffect(() => {
        axios.post('http://localhost:8000/api/fuzzy', {
            population: population,
            gdp: gdp,
            gdp_per_capita: gdpPerCapita,
            unemployment_rate: unemploymentRate
        })
            .then(function (response) {
                setData(response?.data);
                setDataSource(mapData(response?.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const mapData = (data) => {
        const newData = [];

        newData.push(mapDataItem('population', data?.population))
        newData.push(mapDataItem('gdp', data?.gdp))
        newData.push(mapDataItem('gdpPerCapita', data?.gdp_per_capita))
        newData.push(mapDataItem('unemploymentRate', data?.unemployment_rate))

        return newData;
    }

    const mapDataItem = (type, item) => {
        switch (type) {
            case 'population':
                return {
                    title: TITLE.population,
                    data: population,
                    value: Math.round(item?.value * 100) / 100,
                    label: POPULATION_LABEL[item?.label]
                }
            case 'gdp':
                return {
                    title: TITLE.gdp,
                    data: gdp,
                    value: Math.round(item?.value * 100) / 100,
                    label: GDP_LABEL[item?.label]
                }
            case 'gdpPerCapita':
                return {
                    title: TITLE.gdpPerCapita,
                    data: gdpPerCapita,
                    value: Math.round(item?.value * 100) / 100,
                    label: GDP_PER_CAPITA_LABEL[item?.label]
                }
            case 'unemploymentRate':
                return {
                    title: TITLE.unemploymentRate,
                    data: unemploymentRate,
                    value: Math.round(item?.value * 100) / 100,
                    label: UNEMPLOYMENT_RATE_LABEL[item?.label]
                }
            default:
                return;
        }
    }

    const columns = [
        {
            title: 'Tiêu chí đánh giá',
            dataIndex: 'title',
        },
        {
            title: 'Giá trị',
            dataIndex: 'data',
        },
        {
            title: 'Nhãn đánh giá',
            dataIndex: 'label',
        },
        {
            title: 'Hệ số hỗ trợ',
            dataIndex: 'value',
        },
    ];

    return (
        <>
            {
                data && (<div className={"site-layout-content"}>
                    <h1 style={{
                        textAlign: 'center',
                        marginBottom: '10px'
                    }}>
                        Kết quả phân tích
                    </h1>

                    <Table columns={columns} dataSource={dataSource} pagination={false}/>
                    <h2 style={{marginTop: '20px'}}>
                        {`Kết quả đánh giá phát triển kinh tế: ${ECONOMY_LABEL[data?.economy?.label]} (${Math.round(data?.economy?.value * 100) / 100} / 10)`}
                    </h2>
                </div>)
            }
        </>
    );
}

export default ResultPage;