Developer Notes
===============

The CSS rule to set `font-family` and `font-size` must include all of
the following selectors:

  - `td`   - For text like 'More', 'Search', etc.
  - `span` - To override `font-family` set on `.pageTop`.
  - `div`  - To override `font-family` on `.comment`.
  - `font` - To override `<font size="1">` element that wraps around 'reply' links.
