<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

<meta charset="utf-8" />
    <link rel="shortcut icon" href="/WordPress/wp-content/themes/wptwr/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Travel with Reason"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <title>Travel with Reason</title>
<link href="/WordPress/wp-content/themes/wptwr/static/css/main.chunk.css?0922690b0829efd7f641" rel="stylesheet"></head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
        This PHP file is a template.
    -->
    <script src="/WordPress/wp-content/themes/wptwr/static/js/bundle.js?0922690b0829efd7f641"></script><script src="/WordPress/wp-content/themes/wptwr/static/js/0.chunk.js?0922690b0829efd7f641"></script><script src="/WordPress/wp-content/themes/wptwr/static/js/main.chunk.js?0922690b0829efd7f641"></script></body>
</html>
