<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Aplikasi Inventaris Barang</title>
    <meta content="" name="description">

    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="<?php echo base_url('public/assets/img/favicon.png'); ?>" rel="icon">
    <link href="<?php echo base_url('public/assets/img/apple-touch-icon.png'); ?>" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="<?php echo base_url('public/assets/vendor/aos/aos.css') ?>" rel="stylesheet">
    <link href="<?php echo base_url('public/assets/vendor/bootstrap/css/bootstrap.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('public/assets/vendor/bootstrap-icons/bootstrap-icons.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('public/assets/vendor/glightbox/css/glightbox.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('public/assets/vendor/remixicon/remixicon.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('public/assets/vendor/swiper/swiper-bundle.min.css'); ?>" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="<?php echo base_url('public/assets/css/style.css'); ?>" rel="stylesheet">

    <!-- =======================================================
  * Template Name: FlexStart - v1.11.1
  * Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="index.html" class="">
                <span>SMK NEGERI 6 BANDAR LAMPUNG</span>
            </a>

            <nav id="navbar" class="navbar">

                <ul>
                    <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a class="nav-link scrollto" href="#about">Tentang</a></li>
                </ul>
                <!--
                    <li><a class="nav-link scrollto" href="#services">Services</a></li>
                    <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                    <li><a class="nav-link scrollto" href="#team">Team</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a class="nav-link scrollto" href="">Contact</a></li>
                    <li><a class="getstarted scrollto" href="<?= base_url('/auth/login'); ?>">Login</a></li>
                </ul>
                -->
                <i class="bi bi-list mobile-nav-toggle"></i>

            </nav>
            <!--navbar -->

        </div>
    </header><!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="hero d-flex align-items-center">

        <div class="container">
            <div class="row">
                <div class="col-lg-12 d-flex flex-column justify-content-center text-center">
                    <h1 data-aos="fade-up">Selamat Datang di Sistem Aplikasi</h1>
                    <h2 data-aos="fade-up" data-aos-delay="400">Inventaris Barang Jurusan Sekolah</h2>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <div class="text-center">
                            <a href="<?php echo base_url('auth/login'); ?>" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center text-center">
                                <span class="text-center">Masuk</span>
                                <i class=" bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                    <img src="assets/img/hero-img.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>

    </section><!-- End Hero -->
    <!-- Vendor JS Files -->
    <script src="<?php echo base_url('public/assets/vendor/purecounter/purecounter_vanilla.js'); ?>"></script>
    <script src="<?php echo base_url('public/assets/vendor/aos/aos.js'); ?>"></script>
    <script src="<?php echo base_url('public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'); ?>"></script>
    <script src="<?php echo base_url('public/assets/vendor/glightbox/js/glightbox.min.js'); ?>"></script>
    <script src="<?php echo base_url('public/assets/vendor/isotope-layout/isotope.pkgd.min.js'); ?>"></script>
    <script src="<?php echo base_url('public/assets/vendor/swiper/swiper-bundle.min.js'); ?> "></script>
    <script src="<?php echo base_url('public/assets/vendor/php-email-form/validate.js'); ?>"></script>

    <!-- Template Main JS File -->
    <script src="<?php echo base_url('public/assets/js/main.js'); ?>"></script>

</body>

</html>