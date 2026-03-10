// ==UserScript==
// @name        HN Skins
// @version     0.4.0
// @description Read HN in style!
// @author      Susam Pal
// @match       https://news.ycombinator.com/*
// ==/UserScript==
(function () {
  const skins = {
    Cafe: skCafe,
    Courier: skCourier,
    London: skLondon,
    Midnight: skMidnight,
    Terminal: skTerminal,
    None: null
  }

  function skCafe () {
    const style = document.createElement('style')
    style.className = 'skStyle skCafe'
    style.textContent = `
      body {
        background: #ffe;
      }
      * a:visited {
        color: #754 !important;
      }
      td[bgcolor] *, * a:link, td, span, div, font, input, textarea {
        color: #400 !important;
      }
      .c5A, .c73 {
        color: #633 !important;
      }
      .c88, .c9C {
        color: #966 !important;
      }
      .cBE, .cDD {
        color: #c99 !important;
      }
      td[bgcolor] {
        background: #fa3;
      }
      td[bgcolor="#000000"] {
        background: #000;
      }
      table#hnmain {
        background: #fec;
      }
      td[bgcolor] * {
        color: #000 !important;
      }
      td, span, div, font, input, textarea {
        font-family: monospace, monospace !important;
      }
      input, textarea {
        background: #fc9;
      }
      .hnuser font { /* green user */
        color: #060 !important;
      }
      .topsel {
        font-weight: bold;
      }
    `
    spacingStyle()
    window.document.head.append(style)
  }

  function skCourier () {
    const style = document.createElement('style')
    style.className = 'skStyle skCourier'
    style.textContent = `
      * a:visited {
        color: #666 !important;
      }
      td[bgcolor] *, * a:link, td, span, div, font, input, textarea {
        color: #000 !important;
      }
      .c5A, .c73 {
        color: #666 !important;
      }
      .c88, .c9C {
        color: #999 !important;
      }
      .cBE, .cDD {
        color: #ccc !important;
      }
      td[bgcolor] {
        background: #eee;
        border: thin solid #666;
      }
      td[bgcolor="#000000"] {
        background: #000;
        border: none;
      }
      table#hnmain {
        background: #fff;
      }
      td[bgcolor] * {
        color: #000 !important;
      }
      td, span, div, font, input, textarea {
        font-family: courier, monospace !important;
      }
      img {
        filter: saturate(0);
      }
      .hnuser font { /* green user */
        color: #060;
      }
      .topsel {
        font-weight: bold;
      }
    `
    spacingStyle()
    window.document.head.append(style)
  }

  function skLondon () {
    const style = document.createElement('style')
    style.className = 'skStyle skLondon'
    style.textContent = `
      body {
        background: #eee;
      }
      * a:visited {
        color: #666 !important;
      }
      td[bgcolor] *, * a:link, td, span, div, font, input, textarea {
        color: #000 !important;
      }
      .c5A, .c73 {
        color: #666 !important;
      }
      .c88, .c9C {
        color: #999 !important;
      }
      .cBE, .cDD {
        color: #ccc !important;
      }
      td[bgcolor] {
        background: #333;
      }
      td[bgcolor="#000000"] {
        background: #000;
        height: 0.6em;
      }
      td[bgcolor] * {
        color: #fff !important;
      }
      table#hnmain {
        background: #fff;
      }
      td, span, div, font, input, textarea {
        font-family: georgia, times, serif !important;
        font-size: large !important;
        color: #000;
      }
      img {
        filter: saturate(0);
        margin-right: 0.5em;
      }
      .topsel {
        font-weight: bold;
      }
      .hnuser font { /* green user */
        color: #060;
      }
    `
    spacingStyle()
    window.document.head.append(style)
  }

  function skMidnight () {
    const style = document.createElement('style')
    style.className = 'skStyle skMidnight'
    style.textContent = `
      body {
        background: #111;
      }
      * a:visited {
        color: #888 !important;
      }
      td[bgcolor] *, * a:link, td, span, div, font, input, textarea {
        color: #ccc !important;
      }
      .c5A, .c73 {
        color: #999 !important;
      }
      .c88, .c9C {
        color: #666 !important;
      }
      .cBE, .cDD {
        color: #333 !important;
      }
      td[bgcolor] {
        background: #333;
      }
      td[bgcolor="#000000"] {
        background: #666;
      }
      table#hnmain {
        background: #000;
      }
      img {
        filter: saturate(0);
      }
      input, textarea {
        background: #000;
      }
      .hnuser font { /* green user */
        color: #3c3 !important;
      }
      .topsel {
        font-weight: bold;
      }
    `
    spacingStyle()
    window.document.head.append(style)
  }

  function skTerminal () {
    const style = document.createElement('style')
    style.className = 'skStyle skTerminal'
    style.textContent = `
      body {
        background: #020;
      }
      * a:visited {
        color: #0b0 !important;
      }
      td[bgcolor] *, * a:link, td, span, div, font, input, textarea {
        color: #3f3 !important;
      }
      .c5A, .c73 {
        color: #3c3 !important;
      }
      .c88, .c9C {
        color: #393 !important;
      }
      .cBE, .cDD {
        color: #363 !important;
      }
      td[bgcolor] {
        background: #030;
      }
      td[bgcolor="#000000"] {
        background: #666;
      }
      table#hnmain {
        background: #010;
      }
      td, span, div, font, input, textarea {
        font-family: monospace, monospace !important;
      }
      img {
        filter: hue-rotate(75deg);;
      }
      input, textarea {
        background: #000;
      }
      .hnuser font { /* green user */
        color: #f9f !important;
      }
      .topsel {
        font-weight: bold;
      }
      .votearrow {
        filter: sepia(1) hue-rotate(90deg) saturate(3);
      }
    `
    spacingStyle()
    window.document.head.append(style)
  }

  function spacingStyle () {
    const style = document.createElement('style')
    style.className = 'skStyle spacing'
    style.textContent = `
      .spacer {
        height: 1.25em !important;
      }
      td, span, div, font, input, textarea {
        font-size: medium !important;
      }
      p {
        margin: 1em 0 !important;
      }
      .pagetop {
        line-height: 1.5em;
      }
      .pagetop b {
        margin-right: 1em;
      }
      .subtext {
        padding-top: 0.5em;
      }
      .toptext {
        padding-top: 0.5em;
      }
      .toptext, .comment {
        line-height: 1.5em;
      }
      .reply p {
        margin-bottom: 0.5em !important;
      }
      #bigbox > td {
        padding-top: 0.5em;
      }
    `
    window.document.head.append(style)
  }

  function dialogStyle () {
    const style = document.createElement('style')
    style.className = 'skStyle dialog'
    style.textContent = `
      dialog {
        background: #fec;
        border: thick double #653;
        padding: 1.5em;
      }
      dialog * {
        color: #431;
        font-family: courier, monospace;
        font-size: medium;
      }
      dialog h1 {
        font-size: 1.5em;
        margin: 0;
        text-align: center;
      }
      dialog button {
        font-family: courier, monospace;
        font-size: medium;
        display: block;
        margin: 0 auto;
        min-width: 10em;
        background: #edb;
        padding: 0.25em;
      }
      dialog button:active {
        background: #cb9;
      }
      #skinOptions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, auto);
        grid-auto-flow: column;
        gap: 1em 2em;
        margin: 1.5em 0;
      }
    `
    window.document.head.append(style)
  }

  function loadSkin () {
    for (const style of document.querySelectorAll('.skStyle')) {
      style.remove()
    }
    const name = window.localStorage.getItem('hnskin')
    console.log('Last saved skin:', name)
    if (name === null || skins[name] === null || skins[name] === undefined) {
      console.log('Forgetting invalid skin:', name)
      window.localStorage.removeItem('hnskin')
    } else {
      console.log('Loading skin:', name)
      skins[name]()
    }
    dialogStyle()
  }

  function handleRadio (e) {
    const name = e.target.value
    if (name === 'None') {
      window.localStorage.removeItem('hnskin')
    } else {
      window.localStorage.setItem('hnskin', name)
    }
    loadSkin()
  }

  function effectiveSkinName () {
    return window.localStorage.getItem('hnskin') || 'None'
  }

  function initDialog () {
    const dialog = document.createElement('dialog')
    dialog.id = 'dialog'
    document.body.append(dialog)

    const h1 = document.createElement('h1')
    h1.textContent = 'Select Skin'
    dialog.append(h1)

    const form = document.createElement('form')
    form.method = 'dialog'
    dialog.append(form)

    const divOptions = document.createElement('div')
    divOptions.id = 'skinOptions'
    form.append(divOptions)

    for (const key of Object.keys(skins)) {
      const div = document.createElement('div')
      divOptions.append(div)

      const input = document.createElement('input')
      input.id = 'sk' + key
      input.type = 'radio'
      input.name = 'skin'
      input.value = key
      input.checked = effectiveSkinName() === key
      input.addEventListener('change', handleRadio)
      div.append(input)

      const label = document.createElement('label')
      label.htmlFor = 'sk' + key
      label.textContent = key
      div.append(label)
    }

    const button = document.createElement('button')
    button.textContent = 'Close'
    form.append(button)
  }

  function showDialog (e) {
    e.preventDefault()
    const dialog = document.getElementById('dialog')
    dialog.showModal()
  }

  function init () {
    if (document.getElementById('skinOptions')) {
      return
    }

    initDialog()

    const top = document.querySelector('.pagetop')
    if (top !== null) {
      const anchor = document.createElement('a')
      anchor.href = '#'
      anchor.textContent = 'skins'
      anchor.addEventListener('click', showDialog)
      top.append(' | ', anchor)
    }
    loadSkin()
  }

  init()
})()
