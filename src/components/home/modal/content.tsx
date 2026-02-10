import { RefObject, useEffect } from 'react'
import dayjs from "dayjs";
import { Form, Input, Button, DatePicker, TextArea, Dialog, Radio, Space } from "antd-mobile";
import { ADD_TYPE_VALUE } from "../types";
import { AddTypeOptions } from "../const";
import { DatePickerRef } from "antd-mobile/es/components/date-picker";

export const ModalContent = ({
    showModal,
    setShowModal,
    addType,
}: {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    addType: ADD_TYPE_VALUE;
}) => {
    const [form] = Form.useForm()
    const typeValue = Form.useWatch('type', form);
    console.log("🚀 ~ ModalContent ~ typeValue:", typeValue)

    const onSubmit = () => {
        const values = form.getFieldsValue()
        console.log("🚀 ~ ModalContent ~ values:", values)
    }
    const onClose = () => {
        setShowModal(false)
        form.resetFields()
    }

    useEffect(() => {
        form.setFieldsValue({ type: addType });
    }, [addType, form]);

    return (
        <div className="p-2 fz-12">
            <Form
                initialValues={{ type: addType }}
                form={form}
                layout="vertical"
                className="space-y-4 text-sm"
                footer={
                    <div className="mt-4 flex gap-4">
                        <Button size="small" block className="rounded-lg bg-gray-200 text-gray-700" onClick={onClose}>
                            取消
                        </Button>
                        <Button size="small" block type="submit" color="primary" className="rounded-lg bg-pink-400 text-white" onClick={onSubmit}>
                            保存
                        </Button>
                    </div>
                }
            >
                <Form.Item name="type" label={<span className="text-gray-600">类型</span>} required>
                    <Radio.Group>
                        <Space direction='horizontal'>
                            {
                                AddTypeOptions.map(item => (
                                    <Radio key={item.value} value={item.value} style={{
                                        '--icon-size': '18px',
                                        '--font-size': '14px',
                                        '--gap': '6px',
                                    }}>{item.label}</Radio>
                                ))
                            }
                        </Space>
                    </Radio.Group>
                </Form.Item>
                {
                    typeValue === ADD_TYPE_VALUE.ADD_INSIGHT ?
                        <Form.Item name='insight' label={<span className="text-gray-600">美甲小技巧</span>} required>
                            <TextArea
                                placeholder='请输入心得小技巧'
                                maxLength={100}
                                rows={2}
                                showCount
                            />
                        </Form.Item>
                        :
                        <>
                            <Form.Item name="date" label={<span className="text-gray-600">日期</span>} trigger='onConfirm'
                                getValueProps={value => ({ value: value ? new Date(value) : value })}
                                normalize={value => (value ? dayjs(value).format('YYYY-MM-DD') : value)}
                                onClick={(_, ref: RefObject<DatePickerRef>) => ref.current?.open()} required>
                                <DatePicker>
                                    {value => (value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期')}
                                </DatePicker>
                            </Form.Item>
                            <Form.Item name="amount" label={<span className="text-gray-600">金额</span>}
                                rules={[{ required: true, message: '请输入金额' }]}
                                normalize={value => (value ? Number(value) : value)}
                                required
                            >
                                <Input placeholder="请输入金额" type="number" className="rounded-lg bg-gray-50 p-3" />
                            </Form.Item>
                        </>
                }

            </Form>
        </div>
    )
}