---
date: {{ .Date | dateFormat "2006-01-02" }}
description:
title: {{ replace .File.ContentBaseName "-" " " | title }}
version:
---

# {{ replace .File.ContentBaseName "-" " " | title }}
