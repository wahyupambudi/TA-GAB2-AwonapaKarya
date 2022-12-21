<?php
defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . "libraries/Server.php";

class Barang extends Server
{

    // membuat constructor untuk model
    public function __construct()
    {
        parent::__construct();
        // Your own constructor code
        $this->load->model("Mbarang", "model", TRUE);
    }

    // membuat fungsi get data
    function service_get()
    {

        $token = $this->delete("kd_brg");

        // test menggunakan kd_brg
        $kd_brg = $this->get('kd_brg');

        if ($kd_brg == '') {
            // panggil fungsi get_data
            $brg = $this->model->get_data(base64_encode($token));
            $this->response(array("barang" => $brg), 200);
        } else if ($kd_brg != '') {
            // query where
            $this->db->where("kd_brg", $kd_brg);
            // panggil fungsi get_data
            $brg = $this->model->get_data(base64_encode($token));
            $this->response(array("barang" => $brg), 200);
        } else {
            $this->response(array("status" => "Data Tidak Ditemukan"), 404);
        }
    }

    // membuat fungsi post data
    function service_post()
    {
        // ambil parameter data yang akan di post
        $data = array(
            "kd_brg" => $this->post("kd_brg"),
            "nm_brg" => $this->post("nm_brg"),
            "spek_brg" => $this->post("spek_brg"),
            "jml_brg" => $this->post("jml_brg"),
            "kondisi_brg" => $this->post("kondisi_brg"),
            "tgl_buy_brg" => $this->post("tgl_buy_brg"),
            "harga_brg" => $this->post("harga_brg"),
            "img_brg" => $this->post("img_brg"),
            "token" => base64_encode($this->post("kd_brg"))
        );

        // panggil method save_data dari model barang
        $result = $this->model->save_data(
            $data["kd_brg"],
            $data["nm_brg"],
            $data["spek_brg"],
            $data["jml_brg"],
            $data["kondisi_brg"],
            $data["tgl_buy_brg"],
            $data["harga_brg"],
            $data["img_brg"],
            $data["token"]
        );

        // kondisi dari penyesuaian dari Mbarang
        if ($result == 0) {
            $this->response(array("status" => "Data Barang Berhasil di Simpan"), 200);
        } else {
            $this->response(array("status" => "Data Barang Gagal di Simpan"), 200);
        }
    }

    // membuat fungsi untuk update data
    function service_put()
    {
        $data = array(
            "kd_brg" => $this->put("kd_brg"),
            "nm_brg" => $this->put("nm_brg"),
            "spek_brg" => $this->put("spek_brg"),
            "jml_brg" => $this->put("jml_brg"),
            "kondisi_brg" => $this->put("kondisi_brg"),
            "tgl_buy_brg" => $this->put("tgl_buy_brg"),
            "harga_brg" => $this->put("harga_brg"),
            "img_brg" => $this->put("img_brg"),
            "token" => base64_encode($this->put("token"))
        );

        // panggil model update_data
        $result = $this->model->update_data(
            $data["kd_brg"],
            $data["nm_brg"],
            $data["spek_brg"],
            $data["jml_brg"],
            $data["kondisi_brg"],
            $data["tgl_buy_brg"],
            $data["harga_brg"],
            $data["img_brg"],
            $data["token"]
        );

        // kondisi penyesuaian Mbarang
        if ($result == 0) {
            $this->response(array("status" => "Data Barang Berhasil di Update"), 200);
        } else {
            $this->response(array("status" => "Data Barang Gagal di Update"), 200);
        }
    }

    // membuat fungsi untuk delete_data
    function service_delete()
    {
        // ambil parameter token (kd_brg)
        $token = $this->delete("kd_brg");

        // panggil fungsi delete_data
        $result = $this->model->delete_data(base64_encode($token));

        // proses kondisi if
        if ($result == "y") {
            $this->response(array("status" => "Data Barang Berhasil di Hapus"), 200);
        } else {
            $this->response(array("status" => "Data Barang Gagal di Hapus"), 200);
        }
    }
}
