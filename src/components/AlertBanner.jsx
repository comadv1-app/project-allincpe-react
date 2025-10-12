import { useState, useEffect } from "react";
import "./AlertBanner.css";

export default function AlertBanner() {
  const [visible, setVisible] = useState(true);
  const [countdown, setCountdown] = useState(30); 

  useEffect(() => {
    if (!visible) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <h2>All in CPE (เวอร์ชันทดลอง)</h2>
        <p className="en">
          Welcome! Please note that this website is currently under testing and is for testing purposes only.
        </p>
        <p className="th">
          ยินดีต้อนรับ! โปรดทราบว่าเว็บไซต์นี้ยังอยู่ในช่วงทดลอง และใช้สำหรับการทดสอบเท่านั้น.
        </p>
        <button onClick={() => setVisible(false)}>
          เข้าใช้งานต่อ ({countdown})
        </button>
      </div>
    </div>
  );
}
