import React, { useEffect } from 'react';

const MessengerChat = () => {
  useEffect(() => {
    console.log('MessengerChat component mounted');

    // Facebook SDK betöltése
    window.fbAsyncInit = function() {
      console.log('Facebook SDK initialized');
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Facebook SDK script betöltése
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/hu_HU/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <>
      {/* Facebook Messenger Chat Plugin */}
      <div id="fb-root"></div>

      {/*
        FONTOS: A page_id helyére írd be a Facebook Page ID-t!

        Hogyan találd meg a Page ID-t:
        1. Menj a Facebook oldaladra: https://www.facebook.com/colormecrzy
        2. Menj erre az oldalra: https://commentpicker.com/find-facebook-id.php
        3. Illeszd be az URL-t: https://www.facebook.com/colormecrzy
        4. Másold ki a numerikus ID-t (pl. 123456789012345)
        5. Cseréld ki lent a "YOUR_PAGE_ID_HERE"-t erre a számra
      */}
      <div
        id="fb-customer-chat"
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="1781018275530220"
        theme_color="#8b7eb8"
        logged_in_greeting="Szia! Miben segíthetünk?"
        logged_out_greeting="Szia! Miben segíthetünk?"
      >
      </div>
    </>
  );
};

export default MessengerChat;
