<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends MY_Controller {

	public function index(){

		$this->data['pagina'] = [
            'name'=>'Pepito',
            'age'=>26
		];
		$render  = $this->twig->render('home.html', $this->data);
		echo $render;
	}
}
