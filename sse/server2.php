<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
//数据
$time = date('Y-m-d H:i:s');
$data = array(
    'id'=>1,
    'name'=>'中文',
    'time'=>$time
);

echo "event: ping\n";
echo "data: ".json_encode($data)."\n\n";

echo "event: ping2\n";
echo "data: ".json_encode($data)."\n\n";
flush();
?>