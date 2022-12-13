<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . "libraries/Server.php";

class Barang extends Server {

    function service_get()
    {
        // test menggunakan kd_brg
        $kd_brg = $this->get('kd_brg');

        // panggil model Mbarang
        // model itu alias ketika di panggil cok
        $this->load->model("Mbarang", "model", TRUE);

        if ($kd_brg == '') {
            // panggil fungsi get_data
            $brg = $this->model->get_data();
            $this->response(array("barang" => $brg), 200);
        } else if ($kd_brg != '') {
            // query where
            $this->db->where("kd_brg", $kd_brg);
            // panggil fungsi get_data
            $brg = $this->model->get_data();
            $this->response(array("barang" => $brg), 200);
        } else {
            $this->response(array("status" => "Data Tidak Ditemukan"), 404);
        }
    }
}
