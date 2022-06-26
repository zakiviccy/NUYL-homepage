---
templateKey: pages-en-white
lang: en
title: Sub-threshold signal detection using stochastic resonance
description: Stochastic resonance (SR) is a nonlinear phenomenon in which a system response is enhanced by additional noise. SR has received considerable attention as it can detect a signal that is too weak to be detected by a sensor. By adding noise (usually with a much broader bandwidth than the original signal) to the signal, the original signal’s frequency will resonate with that of the noise signal, amplifying the original signal while not amplifying the noise. As a result, the signal, which could not be detected by the sensor, evolves, and becomes detectable.
date: 2021-04-01T07:57:21.383Z
tags:
  - Research
  - Stochastic resonance
  - Sub-threshold signal detection
---

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/631905450?h=89a088b692&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="SR_demo_20161110_Scilent"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

---

![Figure 1. Performance of a linear response system and an stochastic resonance (nonlinear) system.](../research/Stochastic-resonance/sr4.jpg "Figure 1. Performance of a linear response system and an stochastic resonance (nonlinear) system.")

Figure 1. Performance of a linear response system and an stochastic resonance (nonlinear) system.
<br /><br />

Figure 1 shows a connectional graph that compares the performance of a linear response system and an SR (nonlinear) system. It can be seen that the performance of the linear system decreases when the input noise increases. In contrast, addition of an appropriate amount of noise can improve the SNR of the SR system rather than reduce it.
<br /><br />

We have conducted research on SR and its application to communication systems. In particular, we try to detect extremely low frequency signals, often called sub-threshold signals, which are far below a receiver’s threshold and thus cannot be detected by the receiver. We believe that an extremely low energy communication system can be realized with the aid of the SR mechanism, and green wireless and green network systems will also be possible using energy-harvesting technology.
<br /><br />

Transmitted signal waveform and the output signal waveform of the SR system
<br /><br />

![Figure 2. Transmitted signal waveform and the output signal waveform of the SR system.](../research/Stochastic-resonance/sr_sys4.jpg "Figure 2. Transmitted signal waveform and the output signal waveform of the SR system.")

Figure 2. Transmitted signal waveform and the output signal waveform of the SR system.
<br /><br />

Our approach is simple. We intentionally add broadband noise to a sub-threshold signal, as shown in Figure 2. Here, the horizontal lines in amplitudes + η and − η represent the upper and lower thresholds of the receiver, respectively, meaning that a signal below the threshold is undetectable. Thus, if no noise is added, the receiver cannot detect or demodulate the signal. By adding some intentional noise, the signal becomes detectable and can be demodulated by the receiver.
<br /><br />

Our paper explaining the application of stochastic resonance phenomena to information communication received the 76th Best Paper Award of the Institute of Electronics, Information and Communication Engineers (IEICE) in 2020.
<br /><br />
(Link to the winning paper: https://search.ieice.org/bin/summary.php?id=j102-b_6_445&category=B&year=2019&lang=J)
