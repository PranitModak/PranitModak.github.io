var Headmsg = function (el, text) {
    'use strict';
    var m = this;

    m.init = function () {
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [text];

      setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
      var random_text = '';
      while (random_text.length < length) {
        random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      }

      return random_text;
    };

    m.animateIn = function () {
      if (m.current_length < m.messages[m.message].length) {
        m.current_length = m.current_length + 2;
        if (m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }

        var message = m.generateRandomString(m.current_length);
        $(el).html(message);

        setTimeout(m.animateIn, 20);
      } else {
        setTimeout(m.animateFadeBuffer, 20);
      }
    };

    m.animateFadeBuffer = function () {
      if (m.fadeBuffer === false) {
        m.fadeBuffer = [];
        for (var i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
        }
      }

      var do_cycles = false;
      var message = '';

      for (var i = 0; i < m.fadeBuffer.length; i++) {
        var fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        } else {
          message += fader.l;
        }
      }

      $(el).html(message);
      if (do_cycles === true) {
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        //setTimeout(m.cycleText, 2000);
      }
    };

    m.cycleText = function () {
      m.message = m.message + 1;
      if (m.message >= m.messages.length) {
        m.message = 0;
      }
      m.current_length = 0;
      m.fadeBuffer = false;

      setTimeout(m.animateIn, 200);
    };

    m.init();
  }

  console.clear();
  var messenger;
  var headset = [
    'Scroll to see next',
    'My timeline',
    'Project & Achievement Showcase',
    'Skills learnt in 10th',
    'Skills learnt in 12th',
    'Skills learnt in B.Tech',
    'Skills learnt in CTS Training',
    'Contact Info',
  ];
  var element = '#messenger';
  messenger = new Headmsg($(element), headset[0]);
  function changehead(i) {
    var element = '#messenger';
    messenger = new Headmsg($(element), headset[i]);
    $(".blob").removeClass("blobactive");
    switch(i)
    {
        case 0 :
        $("#Home").addClass("blobactive");
        break;
        case 1 :
        $("#Timer").addClass("blobactive");
        break;
        case 2 :
        $("#Projects").addClass("blobactive");
        break;
        case 3 :
        $("#10th").addClass("blobactive");
        break;
        case 4 :
        $("#12th").addClass("blobactive");
        break;
        case 5 :
        $("#BTech").addClass("blobactive");
        break;
        case 6 :
        $("#CTS").addClass("blobactive");
        break;
        case 7 :
        $("#Contact").addClass("blobactive");
        break;
    }
  }