<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Mbarang extends CI_Model
{
    // membuat model untuk tampil data
    function get_data($token)
    {
        $this->db->select("
            id as id_barang,
            kd_brg as kd_barang,
            nm_brg as nm_barang,
            spek_brg as spek_barang,
            jml_brg as jml_barang,
            kondisi_brg as kondisi_barang,
            tgl_buy_brg as tgl_buy,
            harga_brg as harga_barang,
            img_brg as img_barang
        ");

        $this->db->from("tb_barang");

        if (!empty($token)) {
            $this->db->where("TO_BASE64(kd_brg) = '$token'");
        }

        $this->db->order_by("kd_brg", "ASC");

        $query = $this->db->get()->result();
        return $query;
    }

    // membuat model untuk post data barang
    function save_data($kd_brg, $nm_brg, $spek_brg, $jml_brg, $kondisi_brg, $tgl_buy_brg, $harga_brg, $img_brg, $token)
    {

        $data = json_decode(file_get_contents("php://input"), true); // collect input parameters and convert into readable format

        $fileName  =  $_FILES['imgbrg']['name'];
        $tempPath  =  $_FILES['imgbrg']['tmp_name'];
        $fileSize  =  $_FILES['imgbrg']['size'];

        if (empty($fileName)) {
            $errorMSG = json_encode(array("message" => "please select image", "status" => false));
            echo $errorMSG;
        } else {
            // set upload folder path 
            $upload_path = 'public/upload/';

            // newfilename
            $newfilename = uniqid() . $fileName;

            // get image extension
            $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

            // valid image extensions
            $valid_extensions = array('jpeg', 'jpg', 'png', 'gif');

            // allow valid image file formats
            if (in_array($fileExt, $valid_extensions)) {
                //check file not exist our upload folder path
                if (!file_exists($upload_path . $fileName)) {
                    // check file size '5MB'
                    if ($fileSize < 5000000) {
                        move_uploaded_file($tempPath, $upload_path . $newfilename); // move file from system temporary path to our upload folder path 
                    } else {
                        $errorMSG = json_encode(array("message" => "Sorry, your file is too large, please upload 5 MB size", "status" => false));
                        echo $errorMSG;
                    }
                } else {
                    $errorMSG = json_encode(array("message" => "Sorry, file already exists check upload folder", "status" => false));
                    echo $errorMSG;
                }
            } else {
                $errorMSG = json_encode(array("message" => "Sorry, only JPG, JPEG, PNG & GIF files are allowed", "status" => false));
                echo $errorMSG;
            }
        }

        // check kd_brg apakah ada di table
        $this->db->select("kd_brg");
        $this->db->from("tb_barang");
        $this->db->where("TO_BASE64(kd_brg) = '$token'");

        // eksekusi query
        $query = $this->db->get()->result();

        // kondisi jika kdbrg tidak ditemukan
        if (count($query) == 0) {
            // lakukan post data barang
            $data = array(
                "kd_brg" => $kd_brg,
                "nm_brg" => $nm_brg,
                "spek_brg" => $spek_brg,
                "jml_brg" => $jml_brg,
                "kondisi_brg" => $kondisi_brg,
                "tgl_buy_brg" => $tgl_buy_brg,
                "harga_brg" => $harga_brg,
                "img_brg" => $newfilename
            );

            // proses simpan data
            $this->db->insert("tb_barang", $data);
            $result = 0;
        } else {
            $result = 1;
        }
        return $result;
    }

    // membuat model untuk input data
    function update_data($kd_brg, $nm_brg, $spek_brg, $jml_brg, $kondisi_brg, $tgl_buy_brg, $harga_brg, $img_brg, $token)
    {
        // check kd_brg apakah ada di table
        $this->db->select("kd_brg");
        $this->db->from("tb_barang");
        $this->db->where("TO_BASE64(kd_brg) != '$token' AND kd_brg = '$kd_brg'");

        // eksekusi query
        $query = $this->db->get()->result();

        // kondisi jika kd_brg tidak di temukan
        if (count($query) == 0) {
            $data = array(
                "kd_brg" => $kd_brg,
                "nm_brg" => $nm_brg,
                "spek_brg" => $spek_brg,
                "jml_brg" => $jml_brg,
                "kondisi_brg" => $kondisi_brg,
                "tgl_buy_brg" => $tgl_buy_brg,
                "harga_brg" => $harga_brg,
                "img_brg" => $img_brg
            );

            $this->db->where("TO_BASE64(kd_brg) = '$token'");
            $this->db->update("tb_barang", $data);
            $result = 0;
        } else {
            $result = 1;
        }

        return $result;
    }

    // membuat model untuk delete data
    function delete_data($token)
    {
        // select kd_brg
        $this->db->select("kd_brg");
        $this->db->from("tb_barang");

        // merubah kd_brg menjadi base64 dengan variabel token
        $this->db->where("TO_BASE64(kd_brg) = '$token'");

        // eksekusi query
        $query = $this->db->get()->result();

        // kondisi jika kd_brg ditemukan
        if (count($query) == 1) {
            $this->db->where("TO_BASE64(kd_brg) = '$token'");
            $this->db->delete("tb_barang");

            // berikan nilai result
            $result = "y";
        } else {
            $result = "n";
        }
        return $result;
    }
}
