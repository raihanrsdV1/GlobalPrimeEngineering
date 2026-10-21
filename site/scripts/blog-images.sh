#!/usr/bin/env bash
# Generates the optimised images a blog post needs from one source photo:
#   static/images/blog/<slug>.webp      16:10 hero, at most 1600px wide (never upscaled)
#   static/images/blog/<slug>-800.webp  800x500 card thumbnail
#   static/images/og/<slug>.jpg         1200x630 social preview (WhatsApp, Facebook, LinkedIn)
#
# Usage:    scripts/blog-images.sh <source-image> <post-slug> [crop-anchor]
#           crop-anchor is an ImageMagick gravity (default: center), e.g. north or south
# Requires: ImageMagick 7 (`brew install imagemagick`)
set -euo pipefail

if [[ $# -lt 2 || $# -gt 3 ]]; then
	echo "Usage: $0 <source-image> <post-slug> [crop-anchor]" >&2
	exit 1
fi

src="$1"
slug="$2"
gravity="${3:-center}"
root="$(cd "$(dirname "$0")/.." && pwd)"
blog_dir="$root/static/images/blog"
og_dir="$root/static/images/og"
mkdir -p "$blog_dir" "$og_dir"

# Flatten any transparency onto the site's navy background before resizing.
prep=(-background '#0a1628' -alpha remove -alpha off -auto-orient)

read -r w h < <(magick identify -format '%w %h\n' "$src[0]")
hero_w=$((w < 1600 ? w : 1600))
hero_h=$((hero_w * 10 / 16))
if ((hero_h > h)); then
	hero_h=$h
	hero_w=$((hero_h * 16 / 10))
fi

magick "$src[0]" "${prep[@]}" -resize "${hero_w}x${hero_h}^" -gravity "$gravity" -extent "${hero_w}x${hero_h}" \
	-strip -quality 78 "$blog_dir/$slug.webp"
magick "$src[0]" "${prep[@]}" -resize '800x500^' -gravity "$gravity" -extent 800x500 \
	-strip -quality 76 "$blog_dir/$slug-800.webp"
magick "$src[0]" "${prep[@]}" -resize '1200x630^' -gravity "$gravity" -extent 1200x630 \
	-strip -interlace Plane -sampling-factor 4:2:0 -quality 80 "$og_dir/$slug.jpg"

echo "$slug: hero ${hero_w}x${hero_h}, card 800x500, og 1200x630"
