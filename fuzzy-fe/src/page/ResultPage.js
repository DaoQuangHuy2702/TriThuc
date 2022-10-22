import React from 'react';
import {Descriptions} from "antd";

function ResultPage(props) {
    return (
        <div className={"site-layout-content"}>
            <div>
                <Descriptions title="Kết quả phân tích" bordered column={1} style={{textAlign: 'center'}}>
                    <Descriptions.Item label="Dân số (triệu người)">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="GDP (triệu USD)">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="GDP bình quân đầu người (USD)">YES</Descriptions.Item>
                    <Descriptions.Item label="Tỷ lệ thất nghiệp">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Đánh giá chỉ số phát triển kinh tế" style={{fontWeight: 600}}>
                        2019-04-24 18:00:00
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    );
}

export default ResultPage;