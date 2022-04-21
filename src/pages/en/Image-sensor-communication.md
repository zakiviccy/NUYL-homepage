---
templateKey: pages-en
lang: en
title: Image sensor communication
description: We conduct research on image-sensor communication (ISC), one of the visible light communication (VLC) system.
date: 2021-04-01T07:57:21.383Z
tags:
  - Research
  - Visible light communication
  - Image sensor communciation
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
