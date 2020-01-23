<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller{

    protected $twig;
    protected $data = [];

    public  function __construct(){
		parent::__construct();
        $loader = new Twig_Loader_Filesystem( APPPATH .'views/responsive');
        $this->twig = new Twig_Environment($loader);
        $this->data = [
            'base_url' => base_url(),
        ];
    }
    

}
?>