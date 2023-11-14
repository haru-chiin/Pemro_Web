<?php

namespace Controller;

include "Traits/ResponseFormatter.php";
include "Controller/Controller.php";

use Traits\ResponseFormatter;

class productController extends Controller
{
    use ResponseFormatter;
    public function __construct()
    {
        $this->controllerName = "Get All Product";
        $this->controllerMethod = "GET";
    }
    public function getAllProduct()
    {
        $dummyData = [
            "air mineral",
            "kebab",
            "paghetti",
            "jus jambu"
        ];
        $response = [
            "controller_attribute" => $this->getControllerAttribute(),
            "product" => $dummyData
        ];
        return $this->responseFormatter(200, "Succes", $response);
    }
}
