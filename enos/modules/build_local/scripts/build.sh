#!/bin/bash
set -eux -o pipefail

# Install yarn so we can build the UI
npm install --global yarn || true

export CGO_ENABLED=0

root_dir="$(git rev-parse --show-toplevel)"
pushd "$root_dir" > /dev/null
make ci-build-ui ci-build

: "${BUNDLE_PATH:=$(git rev-parse --show-toplevel)/vault.zip}"
echo "--> Bundling dist/* to $BUNDLE_PATH"
zip -r -j "$BUNDLE_PATH" dist/

popd > /dev/null
