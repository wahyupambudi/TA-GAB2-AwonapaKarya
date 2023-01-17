import React from 'react'

const FormEditBarangs = () => {
  return (
    <div>
    <h1 className='title'>BARANG MODAL</h1>
    <h2 className='subtitle'>EDIT BARANG MODAL BARU</h2>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">

        <form>
        <div className="field">
            <label className="label">Kode Barang</label>
        <div className="control">
              <input type="text" className="input" placeholder='Kode Barang'/>
            </div>
            </div>

        <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input type="text" className="input" placeholder='Nama Barang'/>
            </div>
            </div>

        <div className="field">
            <label className="label">Spesifikasi</label>
            <div className="control">
              <input type="text" className="input" placeholder='Spesifikasi'/>
            </div>
            </div>

          <div className="field">
            <label className="label">Jumlah</label>
            <div className="control">
              <input type="text" className="input" placeholder='Jumlah'/>
            </div>
            </div>

          <div className="field">
            <label className="label">Kondisi</label>
            <div className="control">
              <input type="text" className="input" placeholder='Kondisi'/>
            </div>
            </div>

          <div className="field">
            <label className="label">Tanggal Pembelian</label>
            <div className="control">
              <input type="text" className="input" placeholder='Tanggalpembelian'/>
            </div>
            </div>

          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input type="text" className="input" placeholder='Harga'/>
            </div>
            </div>

          <div className="field">
            <label className="label">Gambar</label>
            <div className="control">
              <input type="text" className="input" placeholder=''/>
            </div>
            </div>
        
        
          <div className="field">
            <div className='control'>
            <button className="button is-success is-fullwidth">SIMPAN</button>
            </div> 
          </div>

        </form>
            </div>
        </div>
    </div>
</div> 
  )
}

export default FormEditBarangs