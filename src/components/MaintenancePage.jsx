import "./MaintenancePage.css";

export default function MaintenancePage() {
  return (
    <div className="maint-wrap">
      <div className="maint-card">
        <img src="/applogo.jpg" alt="All in CPE Logo" className="maint-logo" />
        <h1>allincpe is currently undergoing maintenance.</h1>
        <p className="en">
          We apologize for any inconvenience. Please try again later.
        </p>
        <p className="th">
          เว็บไซต์ <strong>allincpe</strong> กำลังอยู่ในระหว่างปิดปรับปรุง
          ขออภัยในความไม่สะดวก กรุณาลองใหม่ภายหลัง
        </p>
        {/*<a className="contact-link">
          Contact support
        </a>*/}
      </div>
    </div>
  );
}
