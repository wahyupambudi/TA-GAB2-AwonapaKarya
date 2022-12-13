<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Mbarang extends CI_Model {
    // membuat model untuk tampil data
    function get_data() {
        $this->db->select("
            id as id_barang,
            kd_brg as kd_barang,
            nm_brg as nm_barang,
            spek_brg as spek_barang,
            jml_brg as jml_barang,
            kondisi_brg as kondisi_barang,
            tgl_buy_brg as tgl_buy,
            harga_brg as harga_barang
        ");

        $this->db->from("tb_barang");
        $this->db->order_by("kd_brg", "DESC");

        $query = $this->db->get()->result();
        return $query;
    }


}