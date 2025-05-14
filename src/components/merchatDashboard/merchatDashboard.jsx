import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';

const MerchantDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [showRefund, setShowRefund] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState(null);

  // Mocked Data Fetch
  const fetchData = () => {
    const mockData = [
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' },
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' },
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' },
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' },
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' },
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' },
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' },
      { id: 'TXN001', amount: 1000, status: 'SUCCESS', refunded: false, date: '2025-05-13' },
      { id: 'TXN002', amount: 500, status: 'FAILED', refunded: false, date: '2025-05-13' },
      { id: 'TXN003', amount: 2000, status: 'SUCCESS', refunded: true, date: '2025-05-12' }
    ];
    setTransactions(mockData);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleRefundClick = (txnId) => {
    setSelectedTxn(txnId);
    setShowRefund(true);
  };

  const confirmRefund = () => {
    setTransactions(prev =>
      prev.map(txn =>
        txn.id === selectedTxn ? { ...txn, refunded: true } : txn
      )
    );
    setShowRefund(false);
  };

  const summary = {
    totalSales: transactions.reduce((a, t) => a + (t.status === 'SUCCESS' ? t.amount : 0), 0),
    transactionCount: transactions.length,
    totalRefunds: transactions.reduce((a, t) => a + (t.refunded ? t.amount : 0), 0),
  };

  return (
    <Container className="mt-4">
      <h2>Merchant Dashboard</h2>

      {/* Summary Cards */}
      <Row className="mb-4">
        <Col>
          <Card><Card.Body><h5>Total Sales</h5><h3>₹{summary.totalSales}</h3></Card.Body></Card>
        </Col>
        <Col>
          <Card><Card.Body><h5>Transactions</h5><h3>{summary.transactionCount}</h3></Card.Body></Card>
        </Col>
        <Col>
          <Card><Card.Body><h5>Total Refunds</h5><h3>₹{summary.totalRefunds}</h3></Card.Body></Card>
        </Col>
      </Row>

      {/* Transaction Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Txn ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Refund</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>₹{txn.amount}</td>
              <td>{txn.status}</td>
              <td>{txn.date}</td>
              <td>
                {txn.status === 'SUCCESS' && !txn.refunded ? (
                  <Button variant="danger" size="sm" onClick={() => handleRefundClick(txn.id)}>
                    Refund
                  </Button>
                ) : txn.refunded ? 'Refunded' : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Refund Confirmation Modal */}
      <Modal show={showRefund} onHide={() => setShowRefund(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Refund</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to refund transaction <strong>{selectedTxn}</strong>?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRefund(false)}>Cancel</Button>
          <Button variant="danger" onClick={confirmRefund}>Refund</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MerchantDashboard;
