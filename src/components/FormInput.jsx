import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormInput({ addKaryawan }) {
  const [formData, setFormData] = useState({
    nama: "",
    gaji: "",
    status: "belum menikah",
    anak: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.gaji) {
      alert("Nama dan gaji harus diisi!");
      return;
    }

    addKaryawan(formData);
    setFormData({ nama: "", gaji: "", status: "belum menikah", anak: 0 });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formNama">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGaji">
          <Form.Label>Gaji/bulan</Form.Label>
          <Form.Control
            type="number"
            name="gaji"
            placeholder="Rp."
            value={formData.gaji}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formStatus">
          <Form.Label>Status Pernikahan</Form.Label>
          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleInputChange}>
            <option value="belum menikah">Belum Menikah</option>
            <option value="menikah">Menikah</option>
          </Form.Select>
        </Form.Group>
      </Row>

      {formData.status === "menikah" && (
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formAnak">
            <Form.Label>Jumlah Anak</Form.Label>
            <Form.Control
              type="number"
              name="anak"
              value={formData.anak}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
      )}

      <Button variant="primary" type="submit">
        Tambah Karyawan
      </Button>
    </Form>
  );
}

export default FormInput;
