# trello_save

**This add-on simplifies exporting a Trello Board's data as JSON**

This can be handy to have a local backup when there are problems with
the intertubes. I keep many to-do lists in Trello, and found the recent
inability to access them frustrating. Now I just click this whenever I
want a fresh local backup!

Note that Trello's mobile apps support offline work - this does not. It
is a read-only snapshot. There is no way to import this data.

## What it does

This extension will put a link labeled "JSON" next to the permission
level of the board (which is directly right of the board name). Click
the link, and the file will be saved with a leading time stamp. (While
ugly, that means you'll never overwrite a file - click and go.)

The resultant json has no white space. If you need to view it, you
should have the json formatted. The easiest way is to open the JSON file
in Firefox.

## Where to get it

Easiest is to open the latest [signed
XPI](https://github.com/hwine/trello_save_web_ext/releases) from the
releases. Otherwise, clone the repo & do whatever developer dance you
like. (I'm using ```web-ext```.)

## Thanks to Trello!

For including the [export
feature](http://help.trello.com/article/747-exporting-data-from-trello-1) -
I just found that UI too buried. They have some [good
notes](http://help.trello.com/article/924-making-sense-of-trellos-json-export)
on viewing the JSON as well.
