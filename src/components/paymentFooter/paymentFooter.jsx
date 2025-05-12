import React from 'react';

export default function Footer() {
    return (
        <div>
            <div style={{ background: "#222", color: "#fff", padding: "40px 16px" }}>
                <div
                    style={{
                        maxWidth: "1140px",
                        margin: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "40px",
                    }}
                >
                    <div style={{ flex: "1 1 30%" }}>
                        <h5>JAISVIK SOFTWARE</h5>
                        <p>Revolutionizing payments for modern businesses.</p>
                    </div>

                    <div style={{ flex: "1 1 20%" }}>
                        <h6>Company</h6>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li><a href="#" style={{ color: "#fff" }}>About</a></li>
                            <li><a href="#" style={{ color: "#fff" }}>Careers</a></li>
                            <li><a href="#" style={{ color: "#fff" }}>Contact</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: "1 1 20%" }}>
                        <h6>Solutions</h6>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li><a href="#" style={{ color: "#fff" }}>Payment Gateway</a></li>
                            <li><a href="#" style={{ color: "#fff" }}>Payouts</a></li>
                            <li><a href="#" style={{ color: "#fff" }}>Payroll</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: "1 1 20%" }}>
                        <h6>Follow Us</h6>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li><a href="#" style={{ color: "#fff" }}>Facebook</a></li>
                            <li><a href="#" style={{ color: "#fff" }}>Twitter</a></li>
                        </ul>
                    </div>

                    {/* <div style={{ flex: "1 1 100%" }}>
            <h6>Newsletter</h6>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ padding: "10px", width: "80%", marginBottom: "10px", borderRadius: "4px" }} 
            />
            <button style={{ background: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px" }}>
              Subscribe
            </button>
          </div> */}
                </div>

                <hr style={{ borderColor: "#555" }} />
                <p style={{ textAlign: "center", marginTop: "16px" }}>
                    © 2025 Jaisvik Software Pvt Ltd. All rights reserved.
                </p>
            </div>
        </div>
    );
}
