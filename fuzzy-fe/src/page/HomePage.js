import React, {useState} from 'react';
import {Button, Form} from "antd";
import FormAsk from "../components/FormAsk";
import {useNavigate} from "react-router-dom";

function HomePage(props) {
    const [visibleFormAsk, setVisibleFormAsk] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate()

    const handleCancel = () => {
        setVisibleFormAsk(false);
    }

    const handleOk = () => {
        form.submit();
    }

    const onFinish = (value) => {
        console.log('Huy value: ', value);
        navigate(`/result?population=${value?.population}&gdp=${value?.gdp}&gdpPerCapita=${value?.gdpPerCapita}&unemploymentRate=${value?.unemploymentRate}`)
    }

    const handleOpen = () => {
        setVisibleFormAsk(true)
    }

    return (
        <div className={"site-layout-content"}>
            <p style={{
                fontSize: '35px',
                textAlign: "center",
                marginTop: '40px',
                fontWeight: '600'
            }}>
                Hệ thống đánh giá chỉ số phát triển kinh tế của quốc gia
            </p>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button
                    type={"primary"}
                    style={{
                        height: '50px',
                        width: '150px',
                        fontSize: '20px',
                    }}
                    onClick={handleOpen}
                >
                    Bắt đầu
                </Button>
            </div>

            <FormAsk
                visibleFormAsk={visibleFormAsk}
                handleOk={handleOk}
                handleCancel={handleCancel}
                onFinish={onFinish}
                form={form}
            />
        </div>
    );
}

export default HomePage;