import { useLocation } from "react-router-dom";
import { Form, Input, Button, DatePicker, InputNumber } from "antd";
import "./RegisterTier.css";

const PaymentVisa = () => {
  const location = useLocation();
  const { state } = location;
  const { plan } = state || {}; // Retrieve information from state

  const onFinish = (values) => {
    console.log("Thông tin thanh toán:", values);
    // Handle payment (e.g., send data to the server)
  };
  
  return (
    <div className="payment-visa-container">
      <h2>Thanh toán Visa</h2>
      <p>Gói bạn đã chọn: {plan?.title}</p>

      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="cardNumber"
          label="Số thẻ Visa"
          rules={[{ required: true, message: "Vui lòng nhập số thẻ Visa!" }]}
        >
          <Input maxLength={16} placeholder="XXXX XXXX XXXX XXXX" />
        </Form.Item>

        <Form.Item
          name="cardHolder"
          label="Tên chủ thẻ"
          rules={[{ required: true, message: "Vui lòng nhập tên chủ thẻ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="expiryDate"
          label="Ngày hết hạn"
          rules={[{ required: true, message: "Vui lòng chọn ngày hết hạn!" }]}
        >
          <DatePicker
            format="MM/YYYY"
            picker="month"
            placeholder="Chọn tháng/năm"
          />
        </Form.Item>

        <Form.Item
          name="cvv"
          label="CVV"
          rules={[{ required: true, message: "Vui lòng nhập mã CVV!" }]}
        >
          <InputNumber maxLength={3} placeholder="CVV" />
        </Form.Item>

        <Form.Item
          name="amount"
          label="Số tiền"
          initialValue={plan?.price.replace('$','')} // Assuming plan has a price attribute
          rules={[{ required: true, message: "Vui lòng nhập số tiền!" }]}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Thanh toán</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PaymentVisa;
