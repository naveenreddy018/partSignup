// import React, { useState } from "react";
// import { Container, Row, Col, Button, Card, Dropdown } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./ApiCodeSection.css";

// const ApiCodeIntegration = () => {
//     const [language, setLanguage] = useState("Curl");

//     const codeSnippets = {
//         Curl: `curl -X POST https://api.JAISVIKPAY.com/v1/orders \\
// -u [YOUR_KEY_ID]:[YOUR_KEY_SECRET] \\
// -H 'Content-type:application/json' \\
// -d '{
//   "amount": 500,
//   "currency": "INR",
//   "receipt": "qwsa91",
//   "partial_payment": true,
//   "first_payment_min_amount": 230
// }'`,

//         "Node.js": `const JAISVIKPAY= require("JAISVIKPAY");

// const instance = new JAISVIKPAY({
//   key_id: "[YOUR_KEY_ID]",
//   key_secret: "[YOUR_KEY_SECRET]",
// });

// instance.orders.create({
//   amount: 500,
//   currency: "INR",
//   receipt: "qwsa91",
//   partial_payment: true,
//   first_payment_min_amount: 230
// }, function(err, order) {
//   console.log(order);
// });`,

//         Python: `import JAISVIKPAY

// client = JAISVIKPAY.Client(auth=("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]"))

// order = client.order.create({
//   "amount": 500,
//   "currency": "INR",
//   "receipt": "qwsa91",
//   "partial_payment": True,
//   "first_payment_min_amount": 230
// })
// print(order)`,

//         Java: `RazorpayClient  JAISVIKPAY = new JAISVIKPAYClient("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]");

// JSONObject orderRequest = new JSONObject();
// orderRequest.put("amount", 500);
// orderRequest.put("currency", "INR");
// orderRequest.put("receipt", "qwsa91");
// orderRequest.put("partial_payment", true);
// orderRequest.put("first_payment_min_amount", 230);

// Order order = JAISVIKPAY.Orders.create(orderRequest);`
//     };
//     // style={{ backgroundColor: "rgba(0, 32, 96, 0.9)" }}
//     return (
//         <div style={{ backgroundColor: "rgba(0, 32, 96, 0.9)", color: "#002d3c", minHeight: "100vh", marginTop: "100px" }}>

//             <div style={{ backgroundColor: "#e0f0ff", padding: "0.5rem", fontWeight: "bold" }}>
//                 <div className="scrolling-languages text-primary d-flex justify-content-center align-items-center">
//                     {["JAVA", "PYTHON", "PHP", "NODE JS"].map((lang, idx) =>
//                         [...Array(1)].map((_, i) => (
//                             <span key={`${lang}-${i}`} className="me-3">{lang} </span>
//                         ))
//                     )}
//                 </div>
//             </div>


//             <Container className="text-center py-5"
//             >
//                 <h1 className="fw-bold text-primary">Jaisvik Pay Built</h1>
//                 <h2 className="text-info fw-bold">
//                     {"<for developers by developers />"}
//                 </h2>

//                 <Row className="mt-5 text-start">
//                     <Col md={4}>
//                         <h5 className="text-light">Integrations</h5>
//                         <p className="text-light">
//                             Find all popular platform SDKs, plugins, and server integrations in our integration stack.
//                         </p>
//                         <Button variant="link" className="text-light p-0">View Docs →</Button>
//                     </Col>
//                     <Col md={4}>
//                         <h5 className="text-light">API Reference</h5>
//                         <p className="text-light">
//                             Comprehensive documentation to build powerful payment solutions.
//                         </p>
//                         <Button variant="link" className="text-light  p-0">View Docs →</Button>
//                     </Col>
//                     <Col md={4}>
//                         <h5 className="text-light">Webhooks</h5>
//                         <p className="text-light">
//                             Receive real-time notifications for all payment-related transactions and events.
//                         </p>
//                         <Button variant="link" className="text-light p-0">View Docs →</Button>
//                     </Col>
//                 </Row>

//                 <Row className="mt-5">
//                     <Col md={6} className="text-start">
//                         <h5 className="text-light">Try it out</h5>
//                         <h5 className="text-light">
//                             for yourself <span className="ms-2">→</span>
//                         </h5>
//                     </Col>

//                     <Col md={6}>
//                         <Card bg="light" text="dark" border="primary">
//                             <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
//                                 <span>{language}</span>
//                                 <Dropdown onSelect={(e) => setLanguage(e)}>
//                                     <Dropdown.Toggle size="sm" variant="light" className="text-primary border-0">
//                                         Change Language
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu>
//                                         {Object.keys(codeSnippets).map((lang) => (
//                                             <Dropdown.Item key={lang} eventKey={lang}>{lang}</Dropdown.Item>
//                                         ))}
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                             </Card.Header>
//                             <Card.Body>
//                                 <pre style={{ fontSize: "0.8rem", whiteSpace: "pre-wrap" }}>
//                                     {codeSnippets[language]}
//                                 </pre>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default ApiCodeIntegration;

    import React, { useState, useEffect, useRef } from "react";

    const codeSnippets = {
    Curl: `curl -X POST https://api.JAISVIKPAY.com/v1/orders \\
    -u [YOUR_KEY_ID]:[YOUR_KEY_SECRET] \\
    -H 'Content-type:application/json' \\
    -d '{
    "amount": 500,
    "currency": "INR",
    "receipt": "qwsa91",
    "partial_payment": true,
    "first_payment_min_amount": 230
    }'`,

    "Node.js": `const JAISVIKPAY = require("JAISVIKPAY");

    const instance = new JAISVIKPAY({
    key_id: "[YOUR_KEY_ID]",
    key_secret: "[YOUR_KEY_SECRET]",
    });

    instance.orders.create({
    amount: 500,
    currency: "INR",
    receipt: "qwsa91",
    partial_payment: true,
    first_payment_min_amount: 230
    }, function(err, order) {
    console.log(order);
    });`,

    Python: `import JAISVIKPAY

    client = JAISVIKPAY.Client(auth=("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]"))

    order = client.order.create({
    "amount": 500,
    "currency": "INR",
    "receipt": "qwsa91",
    "partial_payment": True,
    "first_payment_min_amount": 230
    })
    print(order)`,

    Java: `RazorpayClient JAISVIKPAY = new JAISVIKPAYClient("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]");

    JSONObject orderRequest = new JSONObject();
    orderRequest.put("amount", 500);
    orderRequest.put("currency", "INR");
    orderRequest.put("receipt", "qwsa91");
    orderRequest.put("partial_payment", true);
    orderRequest.put("first_payment_min_amount", 230);

    Order order = JAISVIKPAY.Orders.create(orderRequest);`
    };

    const documentationLinks = {
    integrations: "https://docs.jaisvikpay.com/integrations",
    api: "https://docs.jaisvikpay.com/api",
    webhooks: "https://docs.jaisvikpay.com/webhooks"
    };

    const languagesAvailable = Object.keys(codeSnippets);

    const ApiCodeIntegration = () => {
    const [language, setLanguage] = useState("Curl");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [currentLine, setCurrentLine] = useState(0);
    const dropdownRef = useRef(null);

    // Mount animation
    useEffect(() => {
        setMounted(true);
    }, []);

    // Typing animation for code
    useEffect(() => {
        const lines = codeSnippets[language].split('\n');
        let lineIndex = 0;
        let charIndex = 0;
        let currentTyped = "";

        const typeWriter = () => {
        if (lineIndex < lines.length) {
            const currentLineText = lines[lineIndex];
            if (charIndex < currentLineText.length) {
            currentTyped += currentLineText[charIndex];
            setTypedText(currentTyped);
            charIndex++;
            setTimeout(typeWriter, 20);
            } else {
            currentTyped += '\n';
            setTypedText(currentTyped);
            lineIndex++;
            charIndex = 0;
            setCurrentLine(lineIndex);
            setTimeout(typeWriter, 100);
            }
        }
        };

        // Reset and start typing
        setTypedText("");
        setCurrentLine(0);
        const timer = setTimeout(typeWriter, 500);

        return () => clearTimeout(timer);
    }, [language]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleKeyDown = (e, lang) => {
        if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLanguage(lang);
        setDropdownOpen(false);
        }
    };

    const copyToClipboard = async () => {
        try {
        await navigator.clipboard.writeText(codeSnippets[language]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        } catch (err) {
        console.error('Failed to copy: ', err);
        }
    };

    return (
        <>
        <style>{`
            * {
            box-sizing: border-box;
            }
            
            body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #0a0e1a;
            color: #e1e8f0;
            line-height: 1.6;
            min-height: 100vh;
            overflow-x: hidden;
            }
            
            /* Animated background */
            body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(90, 217, 244, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(148, 210, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(75, 168, 248, 0.1) 0%, transparent 50%);
            animation: float 20s ease-in-out infinite;
            pointer-events: none;
            z-index: -1;
            }
            
            @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(1deg); }
            66% { transform: translateY(10px) rotate(-1deg); }
            }
            
            .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            }
            
            @media (min-width: 768px) {
            .container {
                padding: 2rem;
            }
            }
            
            @media (min-width: 1024px) {
            .container {
                padding: 3rem 2rem;
            }
            }
            
            .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            opacity: ${mounted ? '1' : '0'};
            transform: ${mounted ? 'translateY(0)' : 'translateY(20px)'};
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            @media (min-width: 1024px) {
            .main-content {
                gap: 3rem;
            }
            }
            
            header {
            text-align: center;
            padding: 3rem 1rem;
            background: rgba(18, 35, 62, 0.4);
            border-radius: 20px;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
            animation: slideInDown 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #5ad9f4, transparent);
            animation: shimmer 3s infinite;
            }
            
            @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
            }
            
            @keyframes slideInDown {
            0% {
                transform: translateY(-30px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
            }
            
            header h1 {
            color: #5ad9f4;
            font-weight: 800;
            font-size: clamp(2rem, 5vw, 4rem);
            margin: 0 0 0.5rem 0;
            background: linear-gradient(135deg, #5ad9f4, #94d2ff, #4ba8f8);
            background-size: 200% 200%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 4s ease-in-out infinite;
            }
            
            @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            }
            
            header h2 {
            color: #94d2ff;
            font-weight: 400;
            font-size: clamp(1.1rem, 2.5vw, 1.5rem);
            margin: 0;
            opacity: 0;
            animation: fadeInUp 1s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            font-family: 'JetBrains Mono', monospace;
            }
            
            @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 0.9;
                transform: translateY(0);
            }
            }
            
            .content-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: stretch;
            }
            
            @media (min-width: 1024px) {
            .content-wrapper {
                flex-direction: row;
                gap: 3rem;
                align-items: flex-start;
            }
            }
            
            .info-section {
            flex: 1;
            animation: slideInLeft 1s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            }
            
            .code-section {
            flex: 1.2;
            min-width: 0;
            animation: slideInRight 1s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            }
            
            @keyframes slideInLeft {
            0% {
                opacity: 0;
                transform: translateX(-30px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
            }
            
            @keyframes slideInRight {
            0% {
                opacity: 0;
                transform: translateX(30px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
            }
            
            .info-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            }
            
            @media (min-width: 640px) {
            .info-grid {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
            }
            
            @media (min-width: 1024px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            }
            
            .info-box {
            background: rgba(18, 35, 62, 0.6);
            border-radius: 16px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
            cursor: pointer;
            }
            
            .info-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #5ad9f4, #94d2ff);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .info-box::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(90, 217, 244, 0.05), rgba(148, 210, 255, 0.05));
            opacity: 0;
            transition: opacity 0.4s ease;
            }
            
            .info-box:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 
                0 20px 40px rgba(90, 217, 244, 0.15),
                0 0 0 1px rgba(90, 217, 244, 0.2);
            border-color: rgba(90, 217, 244, 0.4);
            }
            
            .info-box:hover::before {
            transform: scaleX(1);
            }
            
            .info-box:hover::after {
            opacity: 1;
            }
            
            .info-box h3 {
            margin: 0 0 1rem 0;
            color: #81d8f7;
            font-size: 1.3rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            position: relative;
            z-index: 1;
            }
            
            .info-box p {
            color: #cbd7e1;
            margin: 0 0 2rem 0;
            font-size: 1rem;
            line-height: 1.6;
            position: relative;
            z-index: 1;
            }
            
            .info-box button {
            background: linear-gradient(135deg, #4ba8f8, #5ad9f4);
            border: none;
            color: white;
            padding: 0.875rem 2rem;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            z-index: 1;
            box-shadow: 0 4px 15px rgba(75, 168, 248, 0.3);
            }
            
            .info-box button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(75, 168, 248, 0.4);
            background: linear-gradient(135deg, #5ad9f4, #6ae2ff);
            }
            
            .code-container {
            background: rgba(5, 16, 36, 0.8);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            backdrop-filter: blur(15px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            }
            
            .code-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(26, 42, 74, 0.8);
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            }
            
            .code-title {
            color: #7ec8f7;
            font-weight: 600;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-family: 'JetBrains Mono', monospace;
            }
            
            .code-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
            }
            
            .dropdown {
            position: relative;
            }
            
            .dropdown-toggle {
            background: rgba(12, 26, 58, 0.9);
            border: 2px solid rgba(75, 168, 248, 0.5);
            color: #7ec8f7;
            padding: 0.625rem 1.25rem;
            border-radius: 8px;
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            white-space: nowrap;
            font-weight: 500;
            }
            
            .dropdown-toggle:hover,
            .dropdown-toggle:focus {
            background: rgba(18, 78, 161, 0.9);
            color: #c9e4ff;
            outline: none;
            box-shadow: 0 0 0 3px rgba(75, 168, 248, 0.2);
            transform: translateY(-1px);
            border-color: rgba(75, 168, 248, 0.8);
            }
            
            .dropdown-menu {
            position: absolute;
            top: calc(100% + 0.75rem);
            right: 0;
            background: rgba(15, 43, 89, 0.95);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(15px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
            min-width: 160px;
            z-index: 1000;
            padding: 0.75rem 0;
            opacity: ${dropdownOpen ? '1' : '0'};
            transform: ${dropdownOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
            transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            pointer-events: ${dropdownOpen ? 'all' : 'none'};
            }
            
            .dropdown-item {
            padding: 0.875rem 1.25rem;
            color: #a0caff;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.2s ease;
            font-weight: 500;
            }
            
            .dropdown-item:hover,
            .dropdown-item:focus {
            background: rgba(58, 94, 169, 0.8);
            color: #e1f1ff;
            outline: none;
            transform: translateX(4px);
            }
            
            .dropdown-item[aria-selected="true"] {
            font-weight: 700;
            color: #c7e3ff;
            background: rgba(18, 78, 161, 0.8);
            position: relative;
            }
            
            .dropdown-item[aria-selected="true"]::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 20px;
            background: #5ad9f4;
            border-radius: 0 2px 2px 0;
            }
            
            .copy-button {
            background: rgba(75, 168, 248, 0.1);
            border: 2px solid rgba(75, 168, 248, 0.3);
            color: #7ec8f7;
            padding: 0.625rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            font-weight: 500;
            white-space: nowrap;
            }
            
            .copy-button:hover {
            background: rgba(75, 168, 248, 0.2);
            color: #c9e4ff;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(75, 168, 248, 0.3);
            }
            
            .copy-button.copied {
            background: rgba(34, 197, 94, 0.2);
            border-color: rgba(34, 197, 94, 0.5);
            color: #86efac;
            transform: scale(0.95);
            }
            
            .copy-button.copied:hover {
            transform: scale(0.95);
            }
            
            pre.code-block {
            background: transparent;
            padding: 2rem;
            font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;
            font-size: 0.95rem;
            color: #bbe1fa;
            overflow-x: auto;
            white-space: pre;
            line-height: 1.7;
            margin: 0;
            min-height: 300px;
            max-height: 500px;
            overflow-y: auto;
            position: relative;
            }
            
            .code-block::after {
            content: '';
            position: absolute;
            right: 2rem;
            bottom: 2rem;
            width: 2px;
            height: 1.2rem;
            background: #5ad9f4;
            animation: blink 1s infinite;
            }
            
            @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
            }
            
            @media (max-width: 768px) {
            .code-header {
                flex-direction: column;
                gap: 1rem;
                align-items: stretch;
                padding: 1rem;
            }
            
            .code-actions {
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 0.75rem;
            }
            
            .dropdown-toggle {
                flex: 1;
                justify-content: center;
                min-width: 120px;
            }
            
            .copy-button {
                flex: 1;
                justify-content: center;
                min-width: 100px;
            }
            
            pre.code-block {
                font-size: 0.85rem;
                padding: 1.5rem;
                min-height: 250px;
            }
            
            .dropdown-menu {
                right: auto;
                left: 0;
                width: 100%;
            }
            }
            
            @media (max-width: 480px) {
            .container {
                padding: 1rem;
            }
            
            header {
                padding: 2rem 1rem;
            }
            
            .info-box {
                padding: 1.5rem;
            }
            
            pre.code-block {
                font-size: 0.8rem;
                padding: 1rem;
            }
            
            .code-actions {
                flex-direction: column;
            }
            
            .dropdown-toggle,
            .copy-button {
                width: 100%;
            }
            }
            
            /* Custom scrollbar */
            ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            }
            
            ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb {
            background: rgba(75, 168, 248, 0.4);
            border-radius: 4px;
            transition: background 0.3s ease;
            }
            
            ::-webkit-scrollbar-thumb:hover {
            background: rgba(75, 168, 248, 0.6);
            }
            
            /* Pulse animation for interactive elements */
            @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(90, 217, 244, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(90, 217, 244, 0); }
            100% { box-shadow: 0 0 0 0 rgba(90, 217, 244, 0); }
            }
            
            .info-box:hover {
            animation: pulse 2s infinite;
            }
        `}</style>

        <div className="container">
            <div className="main-content">
            <header>
                <h1>Jaisvik Pay Built</h1>
                <h2>{'<for developers by developers />'}</h2>
            </header>

            <div className="content-wrapper">
                <section className="info-section">
                <div className="info-grid">
                    <article className="info-box">
                    <h3>
                        <span>🔗</span>
                        Integrations
                    </h3>
                    <p>Find all popular platform SDKs, plugins, and server integrations in our comprehensive integration stack.</p>
                    <button
                        onClick={() => window.open(documentationLinks.integrations, "_blank", "noopener")}
                        aria-label="View Integrations Documentation"
                    >
                        View Docs →
                    </button>
                    </article>
                    
                    <article className="info-box">
                    <h3>
                        <span>📚</span>
                        API Reference
                    </h3>
                    <p>Comprehensive documentation and examples to build powerful, scalable payment solutions.</p>
                    <button
                        onClick={() => window.open(documentationLinks.api, "_blank", "noopener")}
                        aria-label="View API Reference Documentation"
                    >
                        View Docs →
                    </button>
                    </article>
                    
                    <article className="info-box">
                    <h3>
                        <span>🔔</span>
                        Webhooks
                    </h3>
                    <p>Receive real-time notifications for all payment-related transactions and events securely.</p>
                    <button
                        onClick={() => window.open(documentationLinks.webhooks, "_blank", "noopener")}
                        aria-label="View Webhooks Documentation"
                    >
                        View Docs →
                    </button>
                    </article>
                </div>
                </section>

                <section className="code-section">
                <div className="code-container">
                    <div className="code-header">
                    <div className="code-title">
                        <span>💻</span>
                        <span>{language} Example</span>
                    </div>
                    <div className="code-actions">
                        <button
                        className={`copy-button ${copied ? 'copied' : ''}`}
                        onClick={copyToClipboard}
                        aria-label="Copy code to clipboard"
                        >
                        {copied ? '✅ Copied' : '📋 Copy'}
                        </button>
                        <div className="dropdown" ref={dropdownRef}>
                        <button
                            className="dropdown-toggle"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            aria-haspopup="listbox"
                            aria-expanded={dropdownOpen}
                            aria-label="Select programming language"
                            type="button"
                        >
                            {language} ⌄
                        </button>
                        <div className="dropdown-menu" role="listbox">
                            {languagesAvailable.map((lang) => (
                            <div
                                key={lang}
                                className="dropdown-item"
                                role="option"
                                tabIndex={0}
                                onClick={() => {
                                setLanguage(lang);
                                setDropdownOpen(false);
                                }}
                                onKeyDown={(e) => handleKeyDown(e, lang)}
                                aria-selected={language === lang}
                            >
                                {lang}
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                    <pre className="code-block">{typedText}</pre>
                </div>
                </section>
            </div>
            </div>
        </div>
        </>
    );
    };

    export default ApiCodeIntegration;