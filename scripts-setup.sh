#!/usr/bin/env bash
set -euo pipefail
bun install
bun run check
bun run build
