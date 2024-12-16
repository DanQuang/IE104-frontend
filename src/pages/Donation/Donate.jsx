import React, { useEffect } from "react";
import "./Donate.css";
import qr from '../../assets/QR.jpg';

const Donate = () => {
  const accountInfo = {
    qrCodeUrl: qr,
    accountNumber: "0332008242",
    accountName: "Phạm Quang Huy",
    bankName: "Ngân hàng MB bank",
  };

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="donate-page-container">
      <h1>Thông Tin Quyên Góp</h1>
      <div className="qr-code-container">
        <img
          src={accountInfo.qrCodeUrl}
          alt="QR Code"
          className="qr-code"
        />
      </div>
      <div className="account-info">
        <p>
          <strong>Số tài khoản:</strong> {accountInfo.accountNumber}
        </p>
        <p>
          <strong>Tên tài khoản:</strong> {accountInfo.accountName}
        </p>
        <p>
          <strong>Ngân hàng:</strong> {accountInfo.bankName}
        </p>
      </div>
      <button
        className="copy-button"
        onClick={() =>
          navigator.clipboard.writeText(accountInfo.accountNumber)
        }
      >
        Sao chép số tài khoản
      </button>
    </div>
  );
};

export default Donate;
