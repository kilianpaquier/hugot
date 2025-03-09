---
date: {{ .Date | dateFormat "2006-01-02" }}
description:
image:
  src: /blog/default-image.png
  height: 200px
title: {{ replace .File.ContentBaseName "-" " " | title }}
version:
---
