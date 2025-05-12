import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ApiCodeSection.css"

const ApiCodeIntegration = () => {
    const [language, setLanguage] = useState("Curl");

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

        "Node.js": `const JAISVIKPAY= require("JAISVIKPAY");

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

        Java: `RazorpayClient  JAISVIKPAY = new JAISVIKPAYClient("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]");

JSONObject orderRequest = new JSONObject();
orderRequest.put("amount", 500);
orderRequest.put("currency", "INR");
orderRequest.put("receipt", "qwsa91");
orderRequest.put("partial_payment", true);
orderRequest.put("first_payment_min_amount", 230);

Order order = JAISVIKPAY.Orders.create(orderRequest);`
    };

    return (
        <div style={{ backgroundColor: "#002d3c", color: "white", minHeight: "100vh", marginTop: "150px" }}>

            <div style={{ backgroundColor: "#00b386", padding: "0.5rem", fontWeight: "bold" }}>
                <div style={{ backgroundColor: "#00b386", padding: "0.5rem", fontWeight: "bold" }}>
                    <div className="scrolling-languages text-dark d-flex justify-content-center  align-items-center">
                        {["JAVA", "PYTHON", "PHP", "NODE JS"].map((lang, idx) =>
                            [...Array(1)].map((_, i) => (
                                <span key={`${lang}-${i}`} className="me-3">{lang} </span>
                            ))
                        )}
                    </div>
                </div>

            </div>

            <Container className="text-center py-5">
                <h1 className="fw-bold">Jaisvik Pay built</h1>
                <h2 className="text-success fw-bold">
                    {"<for developers by developers>"}
                </h2>

                <Row className="mt-5 text-start">
                    <Col md={4}>
                        <h5>Integrations</h5>
                        <p className="text-secondary">
                            Find all popular platform SDKs, plugin, server integrations in our integration stack.
                        </p>
                        <Button variant="link" className="text-info p-0">View Docs →</Button>
                    </Col>
                    <Col md={4}>
                        <h5>API Reference</h5>
                        <p className="text-secondary">
                            Comprehensive documentation to build powerful payment solutions.
                        </p>
                        <Button variant="link" className="text-info p-0">View Docs →</Button>
                    </Col>
                    <Col md={4}>
                        <h5>Webhooks</h5>
                        <p className="text-secondary">
                            Receive real-time notifications for all payment-related transactions and events.
                        </p>
                        <Button variant="link" className="text-info p-0">View Docs →</Button>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={6} className="text-start">
                        <h5>Try it out</h5>
                        <h5>
                            for yourself <span className="ms-2">→</span>
                        </h5>
                    </Col>

                    <Col md={6}>
                        <Card bg="dark" text="white">
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <span>{language}</span>
                                <Dropdown onSelect={(e) => setLanguage(e)}>
                                    <Dropdown.Toggle size="sm" variant="secondary">Change Language</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {Object.keys(codeSnippets).map((lang) => (
                                            <Dropdown.Item key={lang} eventKey={lang}>{lang}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <pre style={{ fontSize: "0.8rem", whiteSpace: "pre-wrap" }}>
                                    {codeSnippets[language]}
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ApiCodeIntegration;
