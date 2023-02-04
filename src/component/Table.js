import Table from 'react-bootstrap/Table';

function Tab({ siswa, editData, hapusData }) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama siswa</th>
          <th>Kelas</th>
          <th>No Absen</th>
          <th>Aksi  </th>
        </tr>
      </thead>
      <tbody>
        {siswa.map((siswas, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{siswas.nama}</td>
              <td>{siswas.kelas}</td>
              <td>{siswas.no_absen}</td>
              <td>
                <button className='btn btn-warning mx-2' onClick={() => editData(siswas.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => hapusData(siswas.id)}>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Tab;
