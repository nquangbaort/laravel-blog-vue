<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <script src="{{ mix('js/app.js') }}"></script>
    </head>
    <body class="">
        <div id="app">
            <example-component></example-component>
        </div>
    </body>
</html>
