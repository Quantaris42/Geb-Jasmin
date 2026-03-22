<?php
$input = $_POST['upwd'] ?? '';
$correctPassword = "2598";

if ($input === $correctPassword) {
    echo "success";
} else {
    echo "error";
}