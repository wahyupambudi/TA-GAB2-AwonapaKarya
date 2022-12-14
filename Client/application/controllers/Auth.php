<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
    }

    public function index()
    {
        $this->load->view('auth/homepage');
    }

    public function login()
    {
        $this->load->view('template/auth_header');
        $this->load->view('auth/login');
        $this->load->view('template/auth_footer');
    }
    public function dashboard()
    {
        $this->load->view('template/dashboard_header');
        $this->load->view('auth/dashboard');
        $this->load->view('template/dashboard_footer');
    }

    public function data_modal()
    {
        $this->load->view('template/dashboard_header');
        $this->load->view('auth/data_modal');
        $this->load->view('template/dashboard_footer');
    }
}
