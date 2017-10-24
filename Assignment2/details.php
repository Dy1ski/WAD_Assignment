<?php
session_start();
$xmlFile = "data/customer.xml";
$dom = DOMDocument::load($xmlFile);



$first = $_GET['first'];
$last = $_GET['last'];
$password = $_GET['password'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$idNumber = rand(0, 25000);
$in = $idNumber;
$_SESSION['CustomerID'] = $in;
// customer id session

echo "Data recieved: ".$first.$last.$password.$email.$phone;

$root = $dom->getElementsByTagName("customer_details")->item(0);
$dom->appendChild($root);

$customer = $dom->createElement("customer");
$root->appendChild($customer);

$id = $dom->createElement("customer_id", $idNumber);
$customer->appendChild($id);

$nName=$dom->createElement("first_name",$first);
$customer->appendChild($nName);

$nLast=$dom->createElement("surname",$last);
$customer->appendChild($nLast);

$nEmail=$dom->createElement("email",$email);
$customer->appendChild($nEmail);

$nPassword=$dom->createElement("password",$password);
$customer->appendChild($nPassword);

$nContact=$dom->createElement("contact_phone",$phone);
$customer->appendChild($nContact);


$dom->save($xmlFile);



 ?>
