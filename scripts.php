<?php
  /*
  This call sends a message to the given recipient with vars and custom vars.
  */
  require 'vendor/autoload.php';
  use MailjetResources;
  $mj = new MailjetClient(getenv('MJ_APIKEY_PUBLIC'), getenv('MJ_APIKEY_PRIVATE'),true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "melissakobia1997",
          'Name' => "melissakobia"
        ],
        'To' => [
          [
            'Email' => "passenger1@example.com",
            'Name' => "passenger 1"
          ]
        ],
        'TemplateID' => 867013,
        'TemplateLanguage' => true,
        'Subject' => "Test Email[[data:firstname:""]]",
        'Variables' => json_decode('{}', true)
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
  $response->success() && var_dump($response->getData());
?>