import React, { Component } from 'react';
import Navbar from './Navbar';
import Table from './Table';
import Form from './Form';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siswa: [],
      nama: '',
      kelas: '',
      no_absen: '',
      id: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === '') {
      this.setState({
        siswa: [
          ...this.state.siswa,
          {
            id: this.state.siswa.length + 1,
            nama: this.state.nama,
            kelas: this.state.kelas,
            no_absen: this.state.no_absen,
          },
        ],
      });
    } else {
      const Update = this.state.siswa
        .filter((siswa) => siswa.id !== this.state.id)
        .map((filterSiswa) => {
          return filterSiswa;
        });
      this.setState({
        siswa: [
          ...Update,
          {
            id: this.state.siswa.length + 1,
            nama: this.state.nama,
            kelas: this.state.kelas,
            no_absen: this.state.no_absen,
          },
        ],
      });
    }

    this.setState({
      nama: '',
      kelas: '',
      no_absen: '',
      id: '',
    });
  };

  editData = (id) => {
    const choseName = this.state.siswa
      .filter((siswa) => siswa.id === id)
      .map((filterSiswa) => {
        return filterSiswa;
      });

    this.setState({
      nama: choseName[0].nama,
      kelas: choseName[0].kelas,
      no_absen: choseName[0].no_absen,
      id: choseName[0].id,
    });
  };

  hapusData = (id) => {
    const Delete = this.state.siswa
        .filter((siswa) => siswa.id !== id)
        .map((filterSiswa) => {
          return filterSiswa;
        });

        this.setState({
          siswa: Delete
        })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar />
          <div className="container mt-5">
            <Table siswa={this.state.siswa} editData={this.editData} hapusData={this.hapusData} />
            <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
