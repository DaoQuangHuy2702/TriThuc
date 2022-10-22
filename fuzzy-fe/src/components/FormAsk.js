import React from 'react';
import {Col, Form, InputNumber, Modal, Row} from "antd";

function FormAsk(props) {
    const onFinish = (values) => {
        props.onFinish(values);
    }

    return (
        <Modal
            open={props.visibleFormAsk}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            destroyOnClose={true}
            width={450}
            title={'Phiếu nhập thông tin'}
            okText={'Đánh giá'}
            cancelText={'Thoát'}
        >
            <Form
                layout={"vertical"}
                onFinish={onFinish}
                form={props.form}
            >
                <Row>
                    <Col span={24}>
                        <Form.Item
                            label={'Dân số (triệu người)'}
                            name={'population'}
                        >
                            <InputNumber
                                style={{width: '100%'}}
                                controls={false}
                                placeholder={'Nhập dân số'}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={'GDP (triệu USD)'}
                            name={'gdp'}
                        >
                            <InputNumber
                                style={{width: '100%'}}
                                controls={false}
                                placeholder={'Nhập GDP'}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={'GDP bình quân đầu người (USD)'}
                            name={'gdpPerCapita'}
                        >
                            <InputNumber
                                style={{width: '100%'}}
                                controls={false}
                                placeholder={'Nhập GDP bình quân đầu người'}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={'Tỷ lệ thất nghiệp (%)'}
                            name={'unemploymentRate'}
                        >
                            <InputNumber
                                style={{width: '100%'}}
                                controls={false}
                                placeholder={'Nhập tỷ lệ thất nghiệp'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

export default FormAsk;