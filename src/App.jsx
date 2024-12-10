import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormInput from "../src/components/FormInput";
import TabelKaryawan from "../src/components/TableKaryawan";

function App() {
  const [dataKaryawan, setDataKaryawan] = useState([]);

  const addKaryawan = (karyawan) => {
    setDataKaryawan([...dataKaryawan, karyawan]);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Data Karyawan</h1>

      {/* Form Input Karyawan */}
      <FormInput addKaryawan={addKaryawan} />

      {/* Tabel Data Karyawan */}
      <h2 className="mt-5">Daftar Karyawan</h2>
      <TabelKaryawan dataKaryawan={dataKaryawan} />
    </Container>
  );
}

export default App;
