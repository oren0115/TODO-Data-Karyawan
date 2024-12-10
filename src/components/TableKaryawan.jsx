import React from "react";
import { Table } from "react-bootstrap";

function TabelKaryawan({ dataKaryawan }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Gaji/bulan</th>
          <th>Status</th>
          <th>Anak</th>
        </tr>
      </thead>
      <tbody>
        {dataKaryawan.map((karyawan, index) => (
          <tr key={index}>
            <td>{karyawan.nama}</td>
            <td>{karyawan.gaji}</td>
            <td>{karyawan.status}</td>
            <td>{karyawan.status === "menikah" ? karyawan.anak : "-"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TabelKaryawan;
