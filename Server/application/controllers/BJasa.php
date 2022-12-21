<?php
defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . "libraries/Server.php";

class Bjasa extends Server
{
    // membuat constructor untuk model
    public function __construct()
    {
        parent::__construct();
        // Your own constructor code
        $this->load->model("Mbjasa", "model", TRUE);
    }

    // membuat fungsi get data
    function service_get()
    {

        $token = $this->delete("kd_bjasa");

        // test menggunakan kd_bjasa
        $kd_bjasa = $this->get('kd_bjasa');

        if ($kd_bjasa == '') {
            // panggil fungsi get_data
            $brgjasa = $this->model->get_data(base64_encode($token));
            $this->response(array("barangjasa" => $brgjasa), 200);
        } else if ($kd_bjasa != '') {
            // query where
            $this->db->where("kd_bjasa", $kd_bjasa);
            // panggil fungsi get_data
            $brgjasa = $this->model->get_data(base64_encode($token));
            $this->response(array("barangjasa" => $brgjasa), 200);
        } else {
            $this->response(array("status" => "Data Tidak Ditemukan"), 404);
        }
    }

    // membuat fungsi post data
    function service_post()
    {
        // ambil parameter data yang akan di post
        $data = array(
            "kd_bjasa" => $this->post("kd_bjasa"),
            "nm_bjasa" => $this->post("nm_bjasa"),
            "spek_bjasa" => $this->post("spek_bjasa"),
            "jml_bjasa" => $this->post("jml_bjasa"),
            "tgl_bjasa" => $this->post("tgl_bjasa"),
            "harga_bjasa" => $this->post("harga_bjasa"),
            "img_bjasa" => $this->post("img_bjasa"),
            "token" => base64_encode($this->post("kd_bjasa"))
        );

        // panggil method save_data dari model barang
        $result = $this->model->save_data(
            $data["kd_bjasa"],
            $data["nm_bjasa"],
            $data["spek_bjasa"],
            $data["jml_bjasa"],
            $data["tgl_bjasa"],
            $data["harga_bjasa"],
            $data["img_bjasa"],
            $data["token"]
        );

        // kondisi dari penyesuaian dari Mbarang
        if ($result == 0) {
            $this->response(array("status" => "Data Barang & Jasa Berhasil di Simpan"), 200);
        } else {
            $this->response(array("status" => "Data Barang & Jasa Gagal di Simpan"), 200);
        }
    }

    // membuat fungsi untuk update data
    function service_put()
    {
        $data = array(
            "kd_bjasa" => $this->put("kd_bjasa"),
            "nm_bjasa" => $this->put("nm_bjasa"),
            "spek_bjasa" => $this->put("spek_bjasa"),
            "jml_bjasa" => $this->put("jml_bjasa"),
            "tgl_bjasa" => $this->put("tgl_bjasa"),
            "harga_bjasa" => $this->put("harga_bjasa"),
            "img_bjasa" => $this->put("img_bjasa"),
            "token" => base64_encode($this->put("token"))
        );

        // panggil model update_data
        $result = $this->model->update_data(
            $data["kd_bjasa"],
            $data["nm_bjasa"],
            $data["spek_bjasa"],
            $data["jml_bjasa"],
            $data["tgl_bjasa"],
            $data["harga_bjasa"],
            $data["img_bjasa"],
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
        // ambil parameter token (kd_bjasa)
        $token = $this->delete("kd_bjasa");

        // panggil fungsi delete_data
        $result = $this->model->delete_data(base64_encode($token));

        // proses kondisi if
        if ($result == "y") {
            $this->response(array("status" => "Data Barang & Jasa Berhasil di Hapus"), 200);
        } else {
            $this->response(array("status" => "Data Barang & Jasa Gagal di Hapus"), 200);
        }
    }
}
