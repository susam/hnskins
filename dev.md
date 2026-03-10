Developer Notes
===============

Release Checklist
-----------------

 1. Update HN Skins code in Chrome Tampermonkey manually.
 2. Take screenshots using the commands in the next section.
 3. Create a new directory for the screenshots:

    ```sh
    VER=0.3.0
    mkdir ~/git/blob/img/hnskins/"$VER"/
    open ~/git/blob/img/hnskins/"$VER"/
    ```

 4. Publish screenshots:

    ```sh
    cd ~/git/blob/ && make pub
    ```

 5. Update version in [hnskins.user.js][].
 6. Update copyright in [LICENCE.md][].
 7. Update [CHANGES.md][].
 8. Update screenshot links (except link screenshot) in [README.md][].
 8. Commit and push:

    ```sh
    make checks
    git status
    git add -p

    VER=0.3.0
    git commit -em "Set version to $VER"
    git tag $VER -m "HN Skins $VER"
    git push origin main $VER

    git remote add cb https://codeberg.org/susam/hnskins.git
    git push cb main
    git push cb --tags
    ```

 9. Go to GitHub and make a release.
10. Go to Codeberg and make a release.
11. Go to susam.net source and write a release page.

[hnskins.user.js]: ../hnskins.user.js
[LICENCE.md]: ../LICENCE.md
[CHANGES.md]: ../CHANGES.md
[README.md]: ../README.md


Release Screenshots
-------------------

```
# Select, Cafe, Courier, Midnight, Terminal
osascript -e 'tell app "Chrome" to set bounds of front window to {0, 0, 1200, 670}'

# London
osascript -e 'tell app "Chrome" to set bounds of front window to {0, 0, 1200, 700}'
```


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
