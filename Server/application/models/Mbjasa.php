<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Mbjasa extends CI_Model
{
    // membuat model untuk tampil data
    function get_data($token)
    {
        $this->db->select("
            id as id_barangjasa,
            kd_bjasa as kd_barangjasa,
            nm_bjasa as nm_barangjasa,
            spek_bjasa as spek_barangjasa,
            jml_bjasa as jml_barangjasa,
            tgl_bjasa as tgl_buy_barangjasa,
            harga_bjasa as harga_barangjasa,
            img_bjasa as img_barangjasa
        ");

        $this->db->from("tb_jasabarang");

        if (!empty($token)) {
            $this->db->where("TO_BASE64(kd_bjasa) = '$token'");
        }

        $this->db->order_by("kd_bjasa", "ASC");

        $query = $this->db->get()->result();
        return $query;
    }

    // membuat model untuk post data barang
    function save_data($kd_bjasa, $nm_bjasa, $spek_bjasa, $jml_bjasa, $tgl_bjasa, $harga_bjasa, $img_bjasa, $token)
    {
        // check kd_bjasa apakah ada di table
        $this->db->select("kd_bjasa");
        $this->db->from("tb_jasabarang");
        $this->db->where("TO_BASE64(kd_bjasa) = '$token'");

        // eksekusi query
        $query = $this->db->get()->result();

        // kondisi jika kdbrg tidak ditemukan
        if (count($query) == 0) {
            // lakukan post data barang
            $data = array(
                "kd_bjasa" => $kd_bjasa,
                "nm_bjasa" => $nm_bjasa,
                "spek_bjasa" => $spek_bjasa,
                "jml_bjasa" => $jml_bjasa,
                "tgl_bjasa" => $tgl_bjasa,
                "harga_bjasa" => $harga_bjasa,
                "img_bjasa" => $img_bjasa
            );

            // proses simpan data
            $this->db->insert("tb_jasabarang", $data);
            $result = 0;
        } else {
            $result = 1;
        }
        return $result;
    }

    // membuat model untuk input data
    function update_data($kd_bjasa, $nm_bjasa, $spek_bjasa, $jml_bjasa, $tgl_bjasa, $harga_bjasa, $img_bjasa, $token)
    {
        // check kd_bjasa apakah ada di table
        $this->db->select("kd_bjasa");
        $this->db->from("tb_jasabarang");
        $this->db->where("TO_BASE64(kd_bjasa) != '$token' AND kd_bjasa = '$kd_bjasa'");

        // eksekusi query
        $query = $this->db->get()->result();

        // kondisi jika kd_bjasa tidak di temukan
        if (count($query) == 0) {
            $data = array(
                "kd_bjasa" => $kd_bjasa,
                "nm_bjasa" => $nm_bjasa,
                "spek_bjasa" => $spek_bjasa,
                "jml_bjasa" => $jml_bjasa,
                "tgl_bjasa" => $tgl_bjasa,
                "harga_bjasa" => $harga_bjasa,
                "img_bjasa" => $img_bjasa
            );

            $this->db->where("TO_BASE64(kd_bjasa) = '$token'");
            $this->db->update("tb_jasabarang", $data);
            $result = 0;
        } else {
            $result = 1;
        }

        return $result;
    }

    // membuat model untuk delete data
    function delete_data($token)
    {
        // select kd_bjasa
        $this->db->select("kd_bjasa");
        $this->db->from("tb_jasabarang");

        // merubah kd_bjasa menjadi base64 dengan variabel token
        $this->db->where("TO_BASE64(kd_bjasa) = '$token'");

        // eksekusi query
        $query = $this->db->get()->result();

        // kondisi jika kd_bjasa ditemukan
        if (count($query) == 1) {
            $this->db->where("TO_BASE64(kd_bjasa) = '$token'");
            $this->db->delete("tb_jasabarang");

            // berikan nilai result
            $result = "y";
        } else {
            $result = "n";
        }
        return $result;
    }
}
