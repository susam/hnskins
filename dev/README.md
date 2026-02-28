Developer Notes
===============


CSS Rules
---------

The CSS rule to set `font-family` and `font-size` must include all of
the following selectors:

  - `td`   - For text like 'More', 'Search', etc.
  - `span` - To override `font-family` set on `.pageTop`.
  - `div`  - To override `font-family` on `.comment`.
  - `font` - To override `<font size="1">` element that wraps around 'reply' links.


Link Screenshot
---------------

- Take a screenshot of the browser set to width 1200.
- In GIMP, cut out a 2400x90 rectangle from the top of the page.
- Load https://en.wikipedia.org/wiki/File:Mano_cursor.svg in GIMP and scale it to 30x39.
- Paste scaled cursor on the cut of the navigation bar right between 'k' and 'i'.
- Make a rectangular selection spanning the width of the 'skins' text
  and the height of the orange bar.
- Expand the rectangle evenly to 118x64.
- From menu, select Edit > Stroke Selection:
  - Line width: 6.0 (default)
  - Join style: curved (middle one)


Release Checklist
-----------------

 1. Update version in [hnskins.user.js][].
 2. Update copyright in [LICENCE.md][].
 3. Update [CHANGES.md][].
 4. Commit and push:

    ```sh
    make checks
    git status
    git add -p

    VER=<VER>
    git commit -em "Set version to $VER"
    git tag $VER -m "HN Skins $VER"
    git push origin main $VER

    git remote add cb https://codeberg.org/susam/hnskins.git
    git push cb main
    git push cb --tags
    ```

 5. Go to GitHub and make a release.
 6. Go to Codeberg and make a release.
 7. Go to susam.net source and write a release page.

[hnskins.user.js]: ../hnskins.user.js
[LICENCE.md]: ../LICENCE.md
[CHANGES.md]: ../CHANGES.md
