import { Form, Row, Col, Button } from 'react-bootstrap';

const Formulir = ({nama, kelas, no_absen, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit data" : "Tambah data"}</h4>
        </Col>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nama siswa</Form.Label>
                <Form.Control type='text' name="nama" value={nama} onChange={(event) => handleChange(event)} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kelas siswa</Form.Label>
                <Form.Control type="text" name="kelas" value={kelas} onChange={(event) => handleChange(event)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>No absen</Form.Label>
                <Form.Control type="number" name="no_absen" value={no_absen} onChange={(event) => handleChange(event)} required/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Formulir;
