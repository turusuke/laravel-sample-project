<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Laravel</title>
</head>
<body>
<div id="app">
  <Top></Top>
</div>
<script src="{{ mix('js/top/app.js') }}"></script>
</body>
</html>
