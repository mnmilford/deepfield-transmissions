#!/usr/bin/env python3
"""Splice background cards from manifest.json into backgrounds.html.

Default: write backgrounds.html in place if it would change.
--check: exit 1 if backgrounds.html is out of date; do not write.
"""
import argparse
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
MANIFEST = REPO / "manifest.json"
PAGE = REPO / "backgrounds.html"
IG_DIR = REPO / "instagram"

START = "<!-- Generated Content Starts -->"
END = "<!-- Generated Content Ends -->"
INDENT = " " * 8


def attr(s: str) -> str:
    return s.replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def text(s: str) -> str:
    return s.replace("<", "&lt;").replace(">", "&gt;")


def render_cards(entries):
    entries = sorted(entries, key=lambda e: e["date"], reverse=True)
    out = []
    for e in entries:
        slug = e["slug"]
        title = e["title"]
        date = e["date"]
        bg = e["background"]
        loc = e.get("location") or {}
        city = loc.get("city", "")
        country = loc.get("country", "")
        loc_str = f"{city}, {country}".strip(", ")
        name = city or title

        mobile_file = f"{slug}-1.png"
        mobile_attr = ""
        if (IG_DIR / mobile_file).exists():
            mobile_attr = f' data-mobile="instagram/{mobile_file}"'

        out.append(
            f'{INDENT}<div class="bg-card" data-slug="{attr(slug)}" data-title="{attr(title)}" '
            f'data-date="{attr(date)}" data-location="{attr(loc_str)}" data-src="{attr(bg)}"{mobile_attr}>\n'
            f'{INDENT}  <div class="bg-preview">\n'
            f'{INDENT}    <img src="{attr(bg)}" alt="{attr(title)}" loading="lazy">\n'
            f'{INDENT}  </div>\n'
            f'{INDENT}  <div class="bg-info">\n'
            f'{INDENT}    <div class="bg-name">{text(name)}</div>\n'
            f'{INDENT}    <div class="bg-date">{text(date)}</div>\n'
            f'{INDENT}    <div class="bg-actions">\n'
            f'{INDENT}      <!-- Download links removed from here as per request -->\n'
            f'{INDENT}    </div>\n'
            f'{INDENT}  </div>\n'
            f'{INDENT}</div>\n'
        )
    return "".join(out)


def splice(html, cards):
    pattern = re.compile(re.escape(START) + r".*?" + re.escape(END), flags=re.DOTALL)
    if not pattern.search(html):
        sys.exit(f"error: splice markers not found in {PAGE}")
    return pattern.sub(f"{START}\n{cards}{INDENT}{END}", html, count=1)


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--check", action="store_true",
                    help="exit 1 if backgrounds.html would change; do not write")
    args = ap.parse_args()

    manifest = json.loads(MANIFEST.read_text())
    cards = render_cards(manifest.get("entries", []))
    current = PAGE.read_text()
    updated = splice(current, cards)

    if updated == current:
        print("backgrounds.html up to date")
        return 0

    if args.check:
        print("backgrounds.html is out of date — run scripts/gen_bg_grid.py", file=sys.stderr)
        return 1

    PAGE.write_text(updated)
    print(f"updated {PAGE.relative_to(REPO)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
