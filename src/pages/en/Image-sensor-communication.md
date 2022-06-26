---
templateKey: pages-en-white
lang: en
title: Image sensor communication
description: We conduct research on image-sensor communication (ISC), one of the visible light communication (VLC) system.
date: 2021-04-01T07:57:21.383Z
tags:
  - Research
  - Visible light communication
  - Image sensor communciation
  - Optical Wireless Communications
---

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/631908435?h=ebe66dc0ed&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="IV21_Nagoya_University_Yamazato"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

---

## Visible light communication

<br />
The 2014 Nobel Prize in Physics has been awarded for the invention of blue light-emitting diodes (LEDs). Meanwhile, it is generally recognized that LEDs offer a new and revolutionary light source that saves energy. The LED market continues to grow, with LEDs successfully competing with conventional light sources used in traffic signals and pedestrian lights, electronic signage boards, street and area lights, automotive headlights, and brake lights.
<br /><br />
Visible light communication (VLC) uses LEDs not only to provide light but also to broadcast data. Because LEDs are solid-state lighting devices, they can be modulated at a high speed that cannot be detected by the human eye. In fact, LED traffic lights in Japan blink at a rate that is twice the rate of the AC line, 100 Hz in eastern Japan and 120 Hz in western Japan. The LED headlights in the new Lexus cars also blink at the rate of several hundred Hertz. If LEDs already blink at a fast rate, why not send information by controlling the blinking pattern according to the data to be transmitted?
<br /><br />

## VLC and its application to intelligent transport systems

<br />
The widespread use of LEDs in traffic applications and the growing interest in intelligent transport systems (ITS) present many opportunities for VLC applications. Data transmission using LED traffic and brake lights is a typical application. Previous studies have documented the effectiveness of vehicle-to-infrastructure (V2I) and vehicle-to-vehicle (V2V) communication using radio technology for improving automotive safety. These communication systems are called V2X.
<br /><br />

In V2X systems, VLC can offer several advantages. Because VLC links are based on visible light, the installation of roadside equipment is much easier. In addition, previously installed facilities, such as LED traffic lights or LED signboards, can be used. Furthermore, since the transmitters or LED light sources are designed for lighting purposes (and thus generally have high radiation power), the SNR is high for VLC, and eye safety is maintained for this “dual-use” lighting, which is defined here as VLC incorporated with LED illumination. Simultaneous data transmission and range estimation are possible.
<br /><br />

We have conducted research on VLC, especially for VLC application to ITS, in particular, (a) infrastructure-to-vehicle VLC (I2V-VLC), (b) V2I-VLC, and (c) V2V-VLC.
<br /><br />

## Image-sensor communications

<br />
Visible-light communication systems that utilize image sensors as reception devices are referred to as image-sensor communication (ISC) systems.
<br /><br />
Nowadays, every smartphone and portable device is equipped with a camera, and the heart of these image-capturing devices is an image sensor. ISC utilize the image sensor as a reception device of a visible-light-modulated signal.
<br /><br />
In general, a photodiode (PD) is used as a reception device of the visible-light signal. However, in a vehicular environment when cars are moving, the PD may receive not only the desired visible-light sources but also various noise sources such as sunlight, streetlights, and other ambient lights and LED transmission sources. As results, all background lights in the field of view (FOV) are summed up as noise, and the received SNR becomes severely low.
<br /><br />
To remove such enormous amount of noise signals, one may use an optical band-pass filter (OBPF). However, the direct sunlight is typically strong and can often be received at an average power that is much higher than that of the desired signal. A telephoto lens that achieves an extremely narrow FOV can be used, but such a receiver requires complex mechanical tracking, which makes it unsuitable for mobile usage.
<br /><br />
A suitable reception device for the VLC signal in an outdoor mobile environment is an image sensor. An image sensor comprises a massive number of PDs called pixels, typically organized in an orthogonal grid. The PD outputs, often referred to as luminance, are arranged in a square matrix forming a digital electronic representation of the scene. In other words, each pixel represents one spatially separated source. This spatial separation feature of the image sensor can easily discard the noise sources and focus only on a desired visible-light signal.
<br /><br />
A particular advantage of complementary metal-oxide-semiconductor image-sensor usage is, owing to the massive number of pixels available, its ability to spatially separate sources. Here the sources include both noise sources, such as sunlight, streetlights, and other ambient lights and LED transmission sources.
The ability to spatially separate sources also provides an additional feature to VLC, in particular, the ability to receive and process multiple transmitting sources.


## Toward the widespread use of visible light communication and [optical wireless communication](/en/Optical-Wireless-Communications-OWC-Workshop/) technologies

Yamazato Laboratory provides technical support for the OWC Workshops held at the Global Communications Conference (Globecom) and the International Conference on Communications (ICC) organized by the Institute of Electrical and Electronics Engineers (IEEE). The OWC Workshops contribute to optical wireless and visible light communication research.

We have hosted the [OWC Workshop](/en/Optical-Wireless-Communications-OWC-Workshop/) web page in red.

### ICC Workshops

- [First](https://icc2015.ieee-icc.org/content/workshops.html) held at London, UK, June. 8, 2015.
- [Second](https://icc2016.ieee-icc.org/content/workshops.html#W02) held at Kuala Lumpur, Malaysia, May 23, 2016
- [Third](https://icc2017.ieee-icc.org/workshop/3rd-workshop-optical-wireless-communications-owc.html) held at Paris, France, May 21, 2017
- [Fourth](https://icc2018.ieee-icc.org/workshop/4th-workshop-optical-wireless-communications-owc) held at Kansas City, USA, May 20, 2018
- [Fifth](https://icc2019.ieee-icc.org/workshop/w23-5th-workshop-optical-wireless-communications) held at Shanghai, China, May 24, 2019
- [Sixth](https://icc2020.ieee-icc.org/workshop/ws-17-workshop-optical-wireless-communications) held at Dublin, Ireland, June 7, 2020
- **<span style="color: red; ">[Seventh](http://yamazato.nuee.nagoya-u.ac.jp/owc2022/index.html) held at ICC 2022, Seoul, Korea, May 20, 2022</span>**

### Globecom Workshops

- [First](https://globecom2010.ieee-globecom.org/WORKSHOPS.html) held at Globecom 2010, Miami, USA, 6 – 10 December 2010
- [Second](https://globecom2011.ieee-globecom.org/workshops.html) held at Globecom 2011, Houston TX, USA, 5 December 2011
- [Third](http://www.bu.edu/smartlighting/optical-wireless-communications-workshop/) held at Globecom 2012, Anaheim, CA, USA, Dec 3, 2012
- [Fourth](https://www.ece.mcmaster.ca/~hranilovic/owc13/OWC_2013/Home.html) held at Globecom 2013, Atlanta, GA, USA, Dec 9, 2013
- [Fifth](http://www.bu.edu/smartlighting/5th-ieee-workshop-on-optical-wireless-communications-owc14/) held at Globecom 2014, Austin, TX, USA, Dec 8, 2014
- [Sixth](http://owcworkshop.ok.ubc.ca/) held at Globecom 2015, San Diego, CA, USA, Dec 6, 2015
- [Seventh](https://globecom2017.ieee-globecom.org/workshop/ws-11-7th-ieee-globecom-workshop-optical-wireless-communications-owc%e2%80%9917) held at Globecom 2017, Singapore, Singapore, Dec 8, 2017
- **<span style="color: red; ">[Eighth](http://yamazato.nuee.nagoya-u.ac.jp/owc2018/index.html) held at Globecom 2018, Abu Dhabi, UAE, Dec 9, 2018</span>**
- **<span style="color: red; ">[Ninth](http://yamazato.nuee.nagoya-u.ac.jp/owc2020/) held at Globecom 2020, Taipei, Taiwan, [Monday, Dec 7, 2020](https://globecom2020.ieee-globecom.org/workshop/ws-01-workshop-optical-wireless-communications-owc)</span>**
  <br /><br />

### IECVLC2018

  In addition, we have hosted the 2nd ICEVLC organized by the Visible Light Communications Association of Japan (now the Visible Light Communications Subcommittee of the Photonics Council of Japan).
  <br /><br />
- [2nd International Conference and Exhibition on Visible Light Communications 2018 (ICEVLC 2018)](http://yamazato.nuee.nagoya-u.ac.jp/icevlc2018)
