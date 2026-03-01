<?php
$input = $_POST['pswd'] ?? '';
$correctPassword = "2598";

if ($input === $correctPassword) {
    echo "success";
} else {
    echo "error";
}