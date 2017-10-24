<?php
$xmlFile = "data/goods.xml";
$dom = DOMDocument::load($xmlFile);

$item = $_GET['item'];
$price = $_GET['itemPrice'];
$quantity = $_GET['itemQuantity'];
$description = $_GET['description'];
$itemID = rand(0,30000);
echo "Data Recieved: ".$item.$price.$quantity.$description;

$root = $dom->getElementsByTagName("item_details")->item(0);
$dom->appendChild($root);
$Litem = $dom->createElement("good");
$root->appendChild($Litem);

$iID = $dom->createElement("item_number",$itemID);
$Litem->appendChild($iID);

$iName = $dom->createElement("name",$item);
$Litem->appendChild($iName);

$iDes = $dom->createElement("description",$description);
$Litem->appendChild($iDes);

$iPrice = $dom->createElement("price",$price);
$Litem->appendChild($iPrice);

$iQuantity = $dom->createElement("quantity",$quantity);
$Litem->appendChild($iQuantity);

$dom->save($xmlFile);

 ?>
