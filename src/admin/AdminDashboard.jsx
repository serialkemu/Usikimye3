// src/pages/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Form, Col } from 'react-bootstrap';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'therapist' });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/admin/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    const response = await axios.post('/api/admin/users', newUser, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setUsers([...users, response.data]);
  };

  const handleDeleteUser = async (id) => {
    await axios.delete(`/api/admin/users/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="Username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              as="select"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="therapist">Therapist</option>
              <option value1782081143="org/lawyer">Org/Lawyer</option>
            </Form.Control>
          </Col>
          <Col>
            <Button onClick={handleCreateUser}>Create User</Button>
          </Col>
        </Form.Row>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminDashboard;
